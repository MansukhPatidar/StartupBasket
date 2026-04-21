import type { Idea } from "./ideas";

export interface SeoMeta {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  ogType: "website" | "article";
  jsonLd?: Record<string, unknown>;
}

const SITE_NAME = "StartupBasket";

// Target length for <meta description> — SERP snippets usually cap around
// 155–160 chars. We pack the one-liner plus score/verdict/category as
// differentiators, but never trim mid-word.
const META_DESC_MAX = 158;

function composeIdeaDescription(idea: Idea): string {
  const base = idea.data.oneLiner.trim().replace(/\s+/g, " ");
  // Score + verdict vary per idea and differentiate SB's results inside a SERP
  // cluster. Category is longer and often won't fit — skipped here, exposed via
  // JSON-LD keywords instead.
  const suffix = ` Scored ${idea.data.score}/100 — ${idea.data.verdict}.`;
  const full = base.endsWith(".") ? `${base}${suffix}` : `${base}.${suffix}`;
  if (full.length <= META_DESC_MAX) return full;
  // Fall back to the one-liner — still useful, and we never truncate the suffix.
  return base.length <= META_DESC_MAX ? base : base.slice(0, META_DESC_MAX - 1).trimEnd() + "…";
}

export function homepageMeta(siteUrl: string): SeoMeta {
  return {
    title: `${SITE_NAME} — AI startup & SaaS ideas for bootstrapped founders`,
    description:
      "A daily catalog of AI startup and SaaS ideas for bootstrapped founders, scored across 7 weighted axes. Find your next $1M–$5M ARR play, validated by a 4-layer rubric.",
    canonical: `${siteUrl}/`,
    ogImage: `${siteUrl}/og-default.png`,
    ogType: "website",
  };
}

export function ideaMeta(idea: Idea, siteUrl: string): SeoMeta {
  const url = `${siteUrl}/ideas/${idea.data.slug}/`;
  const description = composeIdeaDescription(idea);
  return {
    title: `${idea.data.title} — ${SITE_NAME}`,
    description,
    canonical: url,
    ogImage: `${siteUrl}/og-default.png`,
    ogType: "article",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: idea.data.title,
      description,
      datePublished: idea.data.date.toISOString().slice(0, 10),
      author: { "@type": "Organization", name: SITE_NAME },
      publisher: { "@type": "Organization", name: SITE_NAME },
      mainEntityOfPage: url,
      keywords: [
        idea.data.tags.vertical,
        idea.data.tags.model,
        idea.data.tags.geography,
        ...idea.data.tags.secondary,
      ].join(", "),
    },
  };
}

export function tagMeta(tag: string, slug: string, count: number, siteUrl: string): SeoMeta {
  return {
    title: `${tag} ideas — ${SITE_NAME}`,
    description: `${count} product idea${count === 1 ? "" : "s"} tagged ${tag}, each scored on a 7-axis feasibility rubric.`,
    canonical: `${siteUrl}/tags/${slug}/`,
    ogImage: `${siteUrl}/og-default.png`,
    ogType: "website",
  };
}
