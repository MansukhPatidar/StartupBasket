import type { APIRoute, GetStaticPaths } from "astro";
import { getAllIdeas } from "../../lib/ideas";

// Tier 2 — per-idea full-data JSON. One static file per idea, emitted at build
// time. Includes everything Tier 1 has plus the full proposal body. Reserved
// as a future hook for hover previews, body-text search, RSS, partner APIs.
//
// Not currently called by /ideas/ filter UI.

export const getStaticPaths: GetStaticPaths = async () => {
  const ideas = await getAllIdeas();
  return ideas.map((i) => ({
    params: { slug: i.data.slug },
    props: { idea: i },
  }));
};

export const GET: APIRoute = async ({ props }) => {
  const idea = (props as any).idea;
  const payload = {
    slug: idea.data.slug,
    title: idea.data.title,
    oneLiner: idea.data.oneLiner,
    score: idea.data.score,
    verdict: idea.data.verdict,
    confidence: idea.data.confidence,
    complexity: idea.data.complexity,
    date: idea.data.date.toISOString().slice(0, 10),
    category: idea.data.category,
    tags: idea.data.tags,
    axes: idea.data.axes,
    founderFit: idea.data.founderFit,
    featured: idea.data.featured,
    body: idea.body,
  };
  return new Response(JSON.stringify(payload), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
};
