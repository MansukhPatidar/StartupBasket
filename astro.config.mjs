import { defineConfig } from "astro/config";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// Public site URL — used for canonical links, OG, sitemap.
// Override at build time with SITE_URL env var when deploying.
const SITE = process.env.SITE_URL || "https://startupbasket.ai";

// Build a slug -> date map from proposal frontmatter. Used so each idea URL in
// the sitemap carries its own lastmod instead of sharing the build date.
const IDEA_DATES = (() => {
  const out = new Map();
  const root = "./ideas";
  try {
    for (const dir of readdirSync(root)) {
      const proposal = join(root, dir, "proposal.md");
      try {
        if (!statSync(proposal).isFile()) continue;
      } catch { continue; }
      const head = readFileSync(proposal, "utf8").slice(0, 800);
      const slug = head.match(/^slug:\s*(.+)$/m)?.[1]?.trim();
      const date = head.match(/^date:\s*(\d{4}-\d{2}-\d{2})/m)?.[1];
      if (slug && date) out.set(slug, date);
    }
  } catch { /* ideas dir absent — OK for fresh clones */ }
  return out;
})();

const LATEST_IDEA_DATE = [...IDEA_DATES.values()].sort().at(-1);
const TODAY = new Date().toISOString().slice(0, 10);

export default defineConfig({
  site: SITE,
  output: "static",
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
    sitemap({
      serialize(item) {
        const path = new URL(item.url).pathname;

        // /ideas/<slug>/ — lastmod from the proposal's frontmatter date.
        const ideaMatch = path.match(/^\/ideas\/([^/]+)\/$/);
        if (ideaMatch) {
          const date = IDEA_DATES.get(ideaMatch[1]);
          return { ...item, lastmod: date, changefreq: "monthly", priority: 0.8 };
        }

        // Homepage — refreshes whenever a new idea lands.
        if (path === "/") {
          return { ...item, lastmod: LATEST_IDEA_DATE ?? TODAY, changefreq: "daily", priority: 1.0 };
        }

        // /ideas/ index — same cadence as the catalog.
        if (path === "/ideas/") {
          return { ...item, lastmod: LATEST_IDEA_DATE ?? TODAY, changefreq: "daily", priority: 0.9 };
        }

        // Tag listings — refresh as new ideas tagged land.
        if (path.startsWith("/tags/")) {
          return { ...item, lastmod: LATEST_IDEA_DATE ?? TODAY, changefreq: "weekly", priority: 0.5 };
        }

        // Everything else (about, motivation, future static pages).
        return { ...item, changefreq: "monthly", priority: 0.4 };
      },
    }),
  ],
  // Enforce trailing slashes so canonical URLs align with the sitemap and
  // generated directory-style paths (e.g. /ideas/<slug>/index.html).
  trailingSlash: "always",
});
