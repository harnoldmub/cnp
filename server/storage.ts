import { 
  type User, 
  type InsertUser,
  type ContactMessage,
  type InsertContactMessage,
  type NewsletterSubscription,
  type InsertNewsletter,
  type PageSetting,
  type InsertPageSetting,
  type ProjectSubmission,
  type InsertProjectSubmission,
  users,
  contactMessages,
  newsletterSubscriptions,
  pageSettings,
  projectSubmissions
} from "@shared/schema";
import { db } from "./db";
import { desc, eq } from "drizzle-orm";
import { MANAGED_PAGES, type ManagedPageKey } from "@shared/page-settings";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  listContactMessages(): Promise<ContactMessage[]>;
  createNewsletterSubscription(subscription: InsertNewsletter): Promise<{ subscription: NewsletterSubscription; isNew: boolean }>;
  listNewsletterSubscriptions(): Promise<NewsletterSubscription[]>;
  listPageSettings(): Promise<PageSetting[]>;
  updatePageSetting(key: ManagedPageKey, isEnabled: boolean): Promise<PageSetting>;
  createProjectSubmission(submission: InsertProjectSubmission): Promise<ProjectSubmission>;
}

export class DatabaseStorage implements IStorage {
  private async ensurePageSettings() {
    const existing = await db.select().from(pageSettings);
    const existingKeys = new Set(existing.map((item) => item.key));

    const missing = MANAGED_PAGES.filter((page) => !existingKeys.has(page.key)).map((page) => ({
      key: page.key,
      label: page.label,
      href: page.href,
      isEnabled: page.defaultEnabled ? "true" : "false",
    }));

    if (missing.length > 0) {
      await db.insert(pageSettings).values(missing as InsertPageSetting[]);
    }
  }

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

  async listContactMessages(): Promise<ContactMessage[]> {
    return db.select().from(contactMessages).orderBy(desc(contactMessages.createdAt));
  }

  async createNewsletterSubscription(subscription: InsertNewsletter): Promise<{ subscription: NewsletterSubscription; isNew: boolean }> {
    const existing = await db.select().from(newsletterSubscriptions).where(eq(newsletterSubscriptions.email, subscription.email));
    if (existing.length > 0) {
      return { subscription: existing[0], isNew: false };
    }
    const [newsletterSub] = await db.insert(newsletterSubscriptions).values(subscription).returning();
    return { subscription: newsletterSub, isNew: true };
  }

  async listNewsletterSubscriptions(): Promise<NewsletterSubscription[]> {
    return db.select().from(newsletterSubscriptions).orderBy(desc(newsletterSubscriptions.createdAt));
  }

  async listPageSettings(): Promise<PageSetting[]> {
    await this.ensurePageSettings();
    return db.select().from(pageSettings).orderBy(pageSettings.label);
  }

  async updatePageSetting(key: ManagedPageKey, isEnabled: boolean): Promise<PageSetting> {
    await this.ensurePageSettings();
    const [updated] = await db
      .update(pageSettings)
      .set({
        isEnabled: isEnabled ? "true" : "false",
        updatedAt: new Date(),
      })
      .where(eq(pageSettings.key, key))
      .returning();

    return updated;
  }

  async createProjectSubmission(submission: InsertProjectSubmission): Promise<ProjectSubmission> {
    const [projectSubmission] = await db.insert(projectSubmissions).values(submission).returning();
    return projectSubmission;
  }
}

export const storage = new DatabaseStorage();
