import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const contactMessages = pgTable("contact_messages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name"),
  email: text("email").notNull(),
  subject: text("subject"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true,
  createdAt: true,
}).extend({
  lastName: z.string().optional().nullable(),
  subject: z.string().optional().nullable(),
});

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;

export const newsletterSubscriptions = pgTable("newsletter_subscriptions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertNewsletterSchema = createInsertSchema(newsletterSubscriptions).omit({
  id: true,
  createdAt: true,
});

export type InsertNewsletter = z.infer<typeof insertNewsletterSchema>;
export type NewsletterSubscription = typeof newsletterSubscriptions.$inferSelect;

export const pageSettings = pgTable("page_settings", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  key: text("key").notNull().unique(),
  label: text("label").notNull(),
  href: text("href").notNull(),
  isEnabled: text("is_enabled").notNull().default("true"),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertPageSettingSchema = createInsertSchema(pageSettings).omit({
  id: true,
  updatedAt: true,
});

export type InsertPageSetting = z.infer<typeof insertPageSettingSchema>;
export type PageSetting = typeof pageSettings.$inferSelect;

export const projectSubmissions = pgTable("project_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  projectName: text("project_name").notNull(),
  description: text("description").notNull(),
  sector: text("sector").notNull(),
  location: text("location").notNull(),
  budget: text("budget").notNull(),
  attachmentUrl: text("attachment_url"),
  videoLink: text("video_link"),
  dataConsent: text("data_consent").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertProjectSubmissionSchema = createInsertSchema(projectSubmissions).omit({
  id: true,
  createdAt: true,
}).extend({
  email: z.string().email("Adresse email invalide"),
  phone: z.string().min(8, "Numéro de téléphone requis"),
  description: z.string().min(100, "Description minimum 100 caractères").max(2000, "Description maximum 2000 caractères"),
  attachmentUrl: z.string().optional().nullable(),
  videoLink: z.string().url("URL invalide").optional().or(z.literal("")),
  dataConsent: z.string().refine(val => val === "true", "Vous devez accepter les conditions"),
});

export type InsertProjectSubmission = z.infer<typeof insertProjectSubmissionSchema>;
export type ProjectSubmission = typeof projectSubmissions.$inferSelect;
