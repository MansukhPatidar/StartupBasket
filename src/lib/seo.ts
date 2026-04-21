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

export function homepageMeta(siteUrl: string): SeoMeta {
  return {
    title: `${SITE_NAME} — daily AI product ideas, scored honestly`,
    description:
      "A daily catalog of AI-powered product ideas hunting for $1M–$5M ARR. Each idea is scored across 7 weighted axes with a 4-layer rubric framework.",
    canonical: `${siteUrl}/`,
    ogImage: `${siteUrl}/og-default.png`,
    ogType: "website",
  };
}

export function ideaMeta(idea: Idea, siteUrl: string): SeoMeta {
  const url = `${siteUrl}/ideas/${idea.data.slug}/`;
  const description =
    idea.data.oneLiner.length > 160
      ? idea.data.oneLiner.slice(0, 157) + "…"
      : idea.data.oneLiner;
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
