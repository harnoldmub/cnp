import { 
  type User, 
  type InsertUser,
  type ContactMessage,
  type InsertContactMessage,
  type NewsletterSubscription,
  type InsertNewsletter,
  type ProjectSubmission,
  type InsertProjectSubmission,
  users,
  contactMessages,
  newsletterSubscriptions,
  projectSubmissions
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  createNewsletterSubscription(subscription: InsertNewsletter): Promise<{ subscription: NewsletterSubscription; isNew: boolean }>;
  createProjectSubmission(submission: InsertProjectSubmission): Promise<ProjectSubmission>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [contactMessage] = await db.insert(contactMessages).values(message).returning();
    return contactMessage;
  }

  async createNewsletterSubscription(subscription: InsertNewsletter): Promise<{ subscription: NewsletterSubscription; isNew: boolean }> {
    const existing = await db.select().from(newsletterSubscriptions).where(eq(newsletterSubscriptions.email, subscription.email));
    if (existing.length > 0) {
      return { subscription: existing[0], isNew: false };
    }
    const [newsletterSub] = await db.insert(newsletterSubscriptions).values(subscription).returning();
    return { subscription: newsletterSub, isNew: true };
  }

  async createProjectSubmission(submission: InsertProjectSubmission): Promise<ProjectSubmission> {
    const [projectSubmission] = await db.insert(projectSubmissions).values(submission).returning();
    return projectSubmission;
  }
}

export const storage = new DatabaseStorage();
