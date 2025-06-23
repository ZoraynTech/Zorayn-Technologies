import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertJobApplicationSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.json({ success: true, message: "Contact form submitted successfully", data: submission });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, message: "Invalid form data", errors: error.errors });
      } else {
        console.error("Contact submission error:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
      }
    }
  });

  // Get contact submissions (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Get contact submissions error:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  // Get team members
  app.get("/api/team", async (req, res) => {
    try {
      const teamMembers = await storage.getTeamMembers();
      res.json(teamMembers);
    } catch (error) {
      console.error("Get team members error:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  // Job application submission
  app.post("/api/careers/apply", async (req, res) => {
    try {
      const validatedData = insertJobApplicationSchema.parse(req.body);
      const application = await storage.createJobApplication(validatedData);
      res.json({ success: true, message: "Job application submitted successfully", data: application });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, message: "Invalid application data", errors: error.errors });
      } else {
        console.error("Job application error:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
      }
    }
  });

  // Get job applications (for admin purposes)
  app.get("/api/careers/applications", async (req, res) => {
    try {
      const applications = await storage.getJobApplications();
      res.json(applications);
    } catch (error) {
      console.error("Get job applications error:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
