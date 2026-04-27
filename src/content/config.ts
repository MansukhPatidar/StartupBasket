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
    verdict: z.enum(["STRONG GO", "GO", "VALIDATE", "PASS"]),
    confidence: z.enum(["High", "Medium", "Low"]).default("Medium"),
    oneLiner: z.string(),
    tags: z.object({
      vertical: z.string(),
      model: z.string(),
      geography: z.string(),
      secondary: z.array(z.string()).default([]),
    }),
    axes: z
      .object({
        problem: z.number().min(0).max(20).default(0),
        demand: z.number().min(0).max(15).default(0),
        build: z.number().min(0).max(15).default(0),
        distribution: z.number().min(0).max(15).default(0),
        revenue: z.number().min(0).max(15).default(0),
        time: z.number().min(0).max(10).default(0),
        defensibility: z.number().min(0).max(10).default(0),
      })
      .default({
        problem: 0,
        demand: 0,
        build: 0,
        distribution: 0,
        revenue: 0,
        time: 0,
        defensibility: 0,
      }),
    founderFit: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = { ideas };
