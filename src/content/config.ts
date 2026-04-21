import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const ideas = defineCollection({
  // Load proposal.md files from the ideas/ directory (submodule at repo root).
  loader: glob({
    pattern: "*/proposal.md",
    base: "./ideas",
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    complexity: z.enum(["Low", "Medium", "High"]),
    score: z.number().int().min(0).max(100),
    verdict: z.enum(["GO", "MAYBE", "PASS"]),
    oneLiner: z.string(),
    tags: z.object({
      vertical: z.string(),
      model: z.string(),
      geography: z.string(),
      secondary: z.array(z.string()).default([]),
    }),
    featured: z.boolean().default(false),
  }),
});

export const collections = { ideas };
