export const SITE = {
  name: "Vectra Ops",
  wordmark: { first: "VECTRA", second: "_OPS" },
  tagline: "marketing control room",
  description:
    "Data-driven SEO, paid advertising, social and conversion systems engineered to turn traffic into qualified, revenue-ready customers.",
  email: "growth@vectraops.example.com",
  phone: "+1 (415) 555-0110",
  address: "Remote-first · San Francisco · London",
  primaryCta: "Book a Free Strategy Call",
  secondaryCta: "Get Free Marketing Audit",
} as const;

export const MAIN_NAV = [
  { label: "Services", to: "/services" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "About", to: "/about" },
  { label: "Pricing", to: "/pricing" },
  { label: "Blog", to: "/blog" },
] as const;

export const SERVICE_LINKS = [
  { label: "SEO", to: "/services/seo" },
  { label: "Google Ads", to: "/services/google-ads" },
  { label: "Social Media Marketing", to: "/services/social-media-marketing" },
  { label: "Content Marketing", to: "/services/content-marketing" },
  { label: "Web Development", to: "/services/web-development" },
  { label: "Email Marketing", to: "/services/email-marketing" },
  { label: "Branding", to: "/services/branding" },
] as const;

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discover",
    body: "Understand business goals, audience and existing marketing performance.",
  },
  {
    num: "02",
    title: "Strategize",
    body: "Build a data-backed, channel-prioritized marketing strategy.",
  },
  {
    num: "03",
    title: "Launch",
    body: "Execute campaigns, content, SEO and conversion improvements.",
  },
  {
    num: "04",
    title: "Optimize",
    body: "Continuously measure results and improve performance.",
  },
] as const;

export const DEMO_KPIS = [
  { label: "Leads generated", value: "1,240", delta: "+22.1% qoq" },
  { label: "Conversion rate", value: "4.1%", delta: "+0.9pt" },
  { label: "Organic traffic", value: "84K", delta: "+18.4%" },
  { label: "ROAS", value: "5.3x", delta: "+0.6x", accent: true },
  { label: "Cost per lead", value: "$38", delta: "−12.3%" },
  { label: "Revenue growth", value: "+31%", delta: "trailing 90d" },
] as const;

export const PRICING_TIERS = [
  {
    name: "Starter",
    description: "One channel, tight scope, fast feedback loop.",
    price: "$2,500",
    period: "/ month",
    highlighted: false,
    cta: "Book a Free Strategy Call",
    features: [
      "One primary channel (SEO or Paid)",
      "Conversion tracking setup",
      "Monthly performance review",
      "Shared reporting dashboard",
      "Email support",
    ],
  },
  {
    name: "Growth",
    description: "Multi-channel execution with a measurement loop.",
    price: "$6,500",
    period: "/ month",
    highlighted: true,
    cta: "Start Growing",
    features: [
      "Up to three channels",
      "Landing page and CRO program",
      "Content production cadence",
      "Attribution and UTM governance",
      "Bi-weekly working sessions",
      "Slack access",
    ],
  },
  {
    name: "Scale",
    description: "Full growth operations with a dedicated pod.",
    price: "$14,000",
    period: "/ month",
    highlighted: false,
    cta: "Book a Free Strategy Call",
    features: [
      "All channels, dedicated pod",
      "Experimentation program with A/B testing",
      "Lifecycle and email automation",
      "Custom analytics and BI reporting",
      "Weekly working sessions",
      "Quarterly strategy offsite",
    ],
  },
] as const;

export const FAQS = [
  {
    q: "How are your prices set?",
    a: "The tiers on this page are indicative retainers for scoping conversations, not fixed quotes. Final pricing is configured per engagement based on channels, volume and internal resourcing.",
  },
  {
    q: "What happens on the free strategy call?",
    a: "Thirty minutes. We review your current channels, tracking setup and offer, then outline the two or three changes we would prioritise first. No slide deck.",
  },
  {
    q: "Are the metrics on this site real client results?",
    a: "No. Every metric and case study shown is clearly labelled demonstration data until real client results are supplied and approved for publication.",
  },
  {
    q: "Do you work with in-house marketing teams?",
    a: "Most engagements are hybrid. We usually own measurement, paid structure and landing pages while your team owns brand and product marketing.",
  },
  {
    q: "What reporting do we get?",
    a: "A shared dashboard covering leads, sources, campaigns and conversion rate, plus a written monthly review of what changed and what we are testing next.",
  },
  {
    q: "Can we cancel?",
    a: "Engagements run on rolling 90-day terms with a 30-day notice period after the initial term.",
  },
] as const;

export const LEAD_STATUSES = [
  "New",
  "Contacted",
  "Qualified",
  "Proposal",
  "Won",
  "Lost",
] as const;

export type LeadStatus = (typeof LEAD_STATUSES)[number];

export const BUDGET_OPTIONS = [
  "Under $2K",
  "$2K – $5K",
  "$5K – $10K",
  "$10K – $25K",
  "$25K+",
] as const;

export const INDUSTRY_OPTIONS = [
  "B2B SaaS",
  "E-commerce",
  "Professional Services",
  "Healthcare",
  "Fintech",
  "Education",
  "Real Estate",
  "Manufacturing",
  "Other",
] as const;

export const GOAL_OPTIONS = [
  "More qualified leads",
  "Lower cost per lead",
  "Grow organic traffic",
  "Improve conversion rate",
  "Improve ROAS",
  "Launch a new offer",
] as const;

export const TRUST_LOGOS = [
  "AXIOM",
  "NORTHBEAM",
  "KELVIN",
  "ORBITAL",
  "MERIDIAN",
  "CASCARA",
] as const;
