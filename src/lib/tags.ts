// Canonical tag taxonomy for StartupBasket proposals.
// The /new-idea command and the TEMPLATE.md reference this.
// Extend the lists when a genuinely new dimension appears; do not duplicate.

export const VERTICALS = [
  "Retail",
  "DevTools",
  "HealthTech",
  "CleanTech",
  "EdTech",
  "Creator Economy",
  "GovTech",
  "PropTech",
  "HomeServices",
  "TradeTech",
  "Compliance",
  "Logistics",
  "RestaurantTech",
  "IoT",
  "ProfessionalServices",
] as const;

export const MODELS = ["SaaS", "Hardware+SaaS", "IoT+SaaS", "Marketplace", "Hybrid"] as const;

export const GEOGRAPHIES = ["India", "Global", "India+Global", "LATAM", "SEA"] as const;

// Secondary tags are intentionally free-form. These are the canonical strings used so far.
export const SECONDARY = [
  "WhatsApp-first",
  "UPI-native",
  "Multilingual",
  "AI-agent",
  "Voice-first",
  "Compliance-driven",
  "SMB",
  "Solo-builder",
  "Consumer",
  "AI-powered",
] as const;

// Slugify a tag value for use in URLs. e.g. "Creator Economy" -> "creator-economy"
export function tagSlug(tag: string): string {
  return tag
    .toLowerCase()
    .replace(/\+/g, "-plus-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Verdict colors — works in light & dark via Tailwind dark: variants.
export function verdictClasses(verdict: "STRONG GO" | "GO" | "VALIDATE" | "PASS"): string {
  if (verdict === "STRONG GO")
    return "bg-emerald-100 text-emerald-800 ring-emerald-300 dark:bg-emerald-400/20 dark:text-emerald-100 dark:ring-emerald-400/50";
  if (verdict === "GO")
    return "bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-emerald-400/15 dark:text-emerald-200 dark:ring-emerald-400/40";
  if (verdict === "VALIDATE")
    return "bg-amber-50 text-amber-700 ring-amber-200 dark:bg-amber-400/15 dark:text-amber-200 dark:ring-amber-400/40";
  return "bg-rose-50 text-rose-700 ring-rose-200 dark:bg-rose-400/15 dark:text-rose-200 dark:ring-rose-400/40";
}

export function scoreClasses(score: number): string {
  if (score >= 80)
    return "bg-emerald-100 text-emerald-800 ring-emerald-300 dark:bg-emerald-400/20 dark:text-emerald-100 dark:ring-emerald-400/50";
  if (score >= 70)
    return "bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-emerald-400/15 dark:text-emerald-200 dark:ring-emerald-400/40";
  if (score >= 55)
    return "bg-amber-50 text-amber-700 ring-amber-200 dark:bg-amber-400/15 dark:text-amber-200 dark:ring-amber-400/40";
  return "bg-rose-50 text-rose-700 ring-rose-200 dark:bg-rose-400/15 dark:text-rose-200 dark:ring-rose-400/40";
}

// Tag pill tones (ring + bg + text), light + dark.
// Dark variants use brighter alpha and text for legibility on near-black surfaces.
export function tagTone(kind: "vertical" | "model" | "geography" | "secondary"): string {
  switch (kind) {
    case "vertical":
      return "bg-indigo-50 text-indigo-700 ring-indigo-200 dark:bg-indigo-400/15 dark:text-indigo-200 dark:ring-indigo-400/40";
    case "model":
      return "bg-sky-50 text-sky-700 ring-sky-200 dark:bg-sky-400/15 dark:text-sky-200 dark:ring-sky-400/40";
    case "geography":
      return "bg-violet-50 text-violet-700 ring-violet-200 dark:bg-violet-400/15 dark:text-violet-200 dark:ring-violet-400/40";
    default:
      return "bg-surface-subtle text-surface-fg/80 ring-surface-border dark:bg-white/5 dark:text-white/80 dark:ring-white/10";
  }
}
