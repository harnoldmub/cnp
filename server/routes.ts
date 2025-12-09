import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema, insertNewsletterSchema, insertProjectSubmissionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
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
