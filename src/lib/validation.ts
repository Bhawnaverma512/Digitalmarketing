import { z } from "zod";

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max, { message: `Must be under ${max} characters` })
    .optional()
    .or(z.literal(""));

export const attributionSchema = z.object({
  utm_source: optionalText(120),
  utm_medium: optionalText(120),
  utm_campaign: optionalText(120),
  utm_term: optionalText(120),
  utm_content: optionalText(120),
  landing_page: optionalText(500),
  referrer: optionalText(500),
  ab_variant: optionalText(8),
  session_id: optionalText(64),
});

export const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your full name" })
    .max(100, { message: "Name must be under 100 characters" }),
  business_name: optionalText(120),
  email: z
    .string()
    .trim()
    .email({ message: "Enter a valid email address" })
    .max(255, { message: "Email must be under 255 characters" }),
  phone: optionalText(40),
  website: optionalText(200),
  industry: optionalText(80),
  budget: optionalText(40),
  service: optionalText(80),
  goal: optionalText(120),
  message: optionalText(2000),
  form_type: z.enum(["audit", "call", "contact", "quote", "campaign", "newsletter"]),
  // Simple honeypot: bots fill hidden fields.
  company_url_confirm: z.literal("").optional(),
});

export const leadPayloadSchema = leadSchema.merge(attributionSchema);

export type LeadInput = z.infer<typeof leadSchema>;
export type LeadPayload = z.infer<typeof leadPayloadSchema>;

export const trackEventSchema = z.object({
  event_name: z.enum([
    "page_view",
    "cta_click",
    "form_start",
    "form_submit",
    "lead_created",
    "book_call",
    "audit_request",
    "campaign_visit",
    "audit_form_view",
    "audit_form_start",
    "audit_form_submit",
  ]),
  session_id: z.string().trim().min(1).max(64),
  path: optionalText(300),
  variant: optionalText(8),
  campaign_id: z.string().uuid().optional().or(z.literal("")),
  utm_source: optionalText(120),
  utm_medium: optionalText(120),
  utm_campaign: optionalText(120),
  utm_term: optionalText(120),
  utm_content: optionalText(120),
  metadata: z.record(z.string(), z.union([z.string(), z.number(), z.boolean()])).optional(),
});

export const pageViewSchema = z.object({
  session_id: z.string().trim().min(1).max(64),
  path: z.string().trim().min(1).max(300),
  referrer: optionalText(500),
  device: optionalText(20),
  utm_source: optionalText(120),
  utm_medium: optionalText(120),
  utm_campaign: optionalText(120),
  utm_term: optionalText(120),
  utm_content: optionalText(120),
});

export const authSchema = z.object({
  email: z.string().trim().email({ message: "Enter a valid email address" }).max(255),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(72, { message: "Password must be under 72 characters" }),
  full_name: optionalText(100),
});

export const campaignSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().trim().min(2).max(120),
  slug: z
    .string()
    .trim()
    .min(2)
    .max(80)
    .regex(/^[a-z0-9-]+$/, { message: "Use lowercase letters, numbers and dashes only" }),
  headline: z.string().trim().min(2).max(200),
  description: z.string().trim().max(1000).optional().or(z.literal("")),
  cta_label: z.string().trim().min(2).max(80),
  cta_variant_b_label: optionalText(80),
  hero_image_url: optionalText(500),
  target_audience: optionalText(200),
  utm_campaign: optionalText(120),
  status: z.enum(["draft", "active", "paused", "archived"]),
  start_date: optionalText(20),
  end_date: optionalText(20),
});

export type CampaignInput = z.infer<typeof campaignSchema>;
