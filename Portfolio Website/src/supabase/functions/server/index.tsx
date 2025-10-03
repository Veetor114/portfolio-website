import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-810ba79e/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form endpoint
app.post("/make-server-810ba79e/contact", async (c) => {
  try {
    const { name, email, message } = await c.req.json();
    
    if (!name || !email || !message) {
      return c.json({ error: "All fields are required" }, 400);
    }

    // Store the contact form submission in the database
    const contactId = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    await kv.set(contactId, {
      id: contactId,
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
      status: 'new',
      read: false
    });

    console.log("Contact form submission stored:", contactId);

    return c.json({ 
      success: true, 
      message: "Message received successfully! I'll get back to you soon.",
      contactId 
    });

  } catch (error) {
    console.log("Contact form error:", error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

// Admin endpoint to view contact messages
app.get("/make-server-810ba79e/admin/contacts", async (c) => {
  try {
    const contacts = await kv.getByPrefix("contact_");
    
    // Sort by timestamp (newest first)
    contacts.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    
    return c.json({ contacts });
  } catch (error) {
    console.log("Admin contacts error:", error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

// Mark contact as read
app.post("/make-server-810ba79e/admin/contacts/:id/read", async (c) => {
  try {
    const id = c.req.param("id");
    const contact = await kv.get(id);
    
    if (!contact) {
      return c.json({ error: "Contact not found" }, 404);
    }
    
    await kv.set(id, { ...contact, read: true });
    
    return c.json({ success: true });
  } catch (error) {
    console.log("Mark as read error:", error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

// CV download proxy endpoint
app.get("/make-server-810ba79e/download-cv", async (c) => {
  try {
    const cvUrl = "https://eu.docworkspace.com/d/sIBnstND1AdL-9sYG?sa=601.1037";
    
    const response = await fetch(cvUrl);
    
    if (!response.ok) {
      console.log("Failed to fetch CV:", response.status, response.statusText);
      return c.json({ error: "Failed to fetch CV" }, 500);
    }
    
    const cvBlob = await response.arrayBuffer();
    
    // Set headers for file download
    c.header("Content-Type", "application/pdf");
    c.header("Content-Disposition", "attachment; filename=\"Victor_Ikpebagha_CV.pdf\"");
    c.header("Content-Length", cvBlob.byteLength.toString());
    
    return new Response(cvBlob);
    
  } catch (error) {
    console.log("CV download error:", error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

Deno.serve(app.fetch);