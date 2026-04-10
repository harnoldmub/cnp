import type { Express, NextFunction, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema, insertNewsletterSchema, insertProjectSubmissionSchema } from "@shared/schema";
import { MANAGED_PAGES, type ManagedPageKey } from "@shared/page-settings";
import { z } from "zod";
import { sendProjectSubmissionNotification, sendProjectConfirmationEmail } from "./email";

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin-cnp";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "CNP8-Admin-2026!";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  const requireAdmin = (req: Request, res: Response, next: NextFunction) => {
    if (!req.session?.isAdmin) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    next();
  };

  app.get("/api/admin/session", (req, res) => {
    res.status(200).json({ authenticated: Boolean(req.session?.isAdmin) });
  });

  app.get("/api/page-settings", async (_req, res) => {
    try {
      const settings = await storage.listPageSettings();
      res.status(200).json(settings);
    } catch (error) {
      console.error("Public page settings fetch error:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  app.post("/api/admin/login", (req, res) => {
    const { username, password } = req.body ?? {};

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      req.session.isAdmin = true;
      return res.status(200).json({ success: true });
    }

    return res.status(401).json({ success: false, message: "Identifiants invalides" });
  });

  app.post("/api/admin/logout", (req, res) => {
    req.session.destroy(() => {
      res.status(200).json({ success: true });
    });
  });

  app.get("/api/admin/page-settings", requireAdmin, async (_req, res) => {
    try {
      const settings = await storage.listPageSettings();
      res.status(200).json(settings);
    } catch (error) {
      console.error("Admin page settings fetch error:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  app.post("/api/admin/page-settings/:key", requireAdmin, async (req, res) => {
    try {
      const key = req.params.key;
      const isEnabled = req.body?.isEnabled;

      const pageExists = MANAGED_PAGES.some((page) => page.key === key);
      if (!pageExists || typeof isEnabled !== "boolean") {
        return res.status(400).json({ success: false, message: "Invalid page setting" });
      }

      const updated = await storage.updatePageSetting(key as ManagedPageKey, isEnabled);
      return res.status(200).json(updated);
    } catch (error) {
      console.error("Admin page setting update error:", error);
      return res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  app.get("/api/admin/newsletter", requireAdmin, async (_req, res) => {
    try {
      const subscriptions = await storage.listNewsletterSubscriptions();
      res.status(200).json(subscriptions);
    } catch (error) {
      console.error("Admin newsletter fetch error:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  app.get("/api/admin/contact-messages", requireAdmin, async (_req, res) => {
    try {
      const messages = await storage.listContactMessages();
      res.status(200).json(messages);
    } catch (error) {
      console.error("Admin contact messages fetch error:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });
  
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.status(201).json({ success: true, id: message.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, errors: error.errors });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
      }
    }
  });

  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      const result = await storage.createNewsletterSubscription(validatedData);
      
      if (result.isNew) {
        res.status(201).json({ success: true, id: result.subscription.id });
      } else {
        res.status(200).json({ success: true, message: "Already subscribed", id: result.subscription.id });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, errors: error.errors });
      } else {
        console.error("Newsletter subscription error:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
      }
    }
  });

  app.post("/api/project-submission", async (req, res) => {
    try {
      const validatedData = insertProjectSubmissionSchema.parse(req.body);
      const submission = await storage.createProjectSubmission(validatedData);
      
      sendProjectSubmissionNotification(validatedData).catch(console.error);
      sendProjectConfirmationEmail(validatedData.email, validatedData.projectName, validatedData.fullName).catch(console.error);
      
      res.status(201).json({ success: true, id: submission.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, errors: error.errors });
      } else {
        console.error("Project submission error:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
      }
    }
  });

  return httpServer;
}
