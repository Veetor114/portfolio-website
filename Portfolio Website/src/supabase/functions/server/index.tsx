import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";

const app = new Hono();

// Replace with your Make.com webhook URL
const MAKE_WEBHOOK_URL = "https://hook.eu2.make.com/q6ttcnp4pb0zi5cox0i2h6um457882v3";

// Enable logger
app.use("*", logger(console.log));

// Enable CORS for all routes
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  })
);

// Health check endpoint
app.get("/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form endpoint (sends data to Make.com webhook)
app.post("/contact", async (c) => {
  try {
    const { name, email, subject, message } = await c.req.json();

    console.log("Received contact form submission:", { name, email, messageLength: message?.length });

    if (!name || !email || !message) {
      return c.json({ error: "All fields are required" }, 400);
    }

    // Forward form to Make.com webhook
    const response = await fetch(MAKE_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, subject, message }),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("Make webhook error:", text);
      return c.json({ error: "Failed to send message via webhook" }, 500);
    }

    return c.json({
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return c.json({ error: "Internal server error", details: error?.message }, 500);
  }
});

// CV download proxy
app.get("/download-cv", async (c) => {
  try {
    const cvUrl = "https://eu.docworkspace.com/d/sIBnstND1AdL-9sYG?sa=601.1037";
    const response = await fetch(cvUrl);

    if (!response.ok) {
      console.log("Failed to fetch CV:", response.status, response.statusText);
      return c.json({ error: "Failed to fetch CV" }, 500);
    }

    const cvBlob = await response.arrayBuffer();

    c.header("Content-Type", "application/pdf");
    c.header("Content-Disposition", 'attachment; filename="Victor_Ikpebagha_CV.pdf"');
    c.header("Content-Length", cvBlob.byteLength.toString());

    return new Response(cvBlob);
  } catch (error) {
    console.log("CV download error:", error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

// Start the Edge Function
Deno.serve(app.fetch);
