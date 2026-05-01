import type { APIRoute } from "astro";
import { getAllIdeas } from "../lib/ideas";

// Tier 1 — slim card-render data for the full catalog. Static JSON emitted at
// build time; Cloudflare Pages serves it as a plain file.
//
// Used today as a public API surface. The /ideas/ filter UI does NOT fetch this
// file (it filters the build-time-rendered DOM directly). Reserved for future
// callers — RSS, partner integrations, MCP tooling, hover previews.
export const GET: APIRoute = async () => {
  const ideas = await getAllIdeas();
  const payload = ideas.map((i) => ({
    slug: i.data.slug,
    title: i.data.title,
    oneLiner: i.data.oneLiner,
    score: i.data.score,
    verdict: i.data.verdict,
    date: i.data.date.toISOString().slice(0, 10),
    vertical: i.data.tags.vertical,
    model: i.data.tags.model,
    geography: i.data.tags.geography,
    secondary: i.data.tags.secondary,
    featured: i.data.featured,
  }));
  return new Response(JSON.stringify(payload), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=600, s-maxage=3600",
    },
  });
};
