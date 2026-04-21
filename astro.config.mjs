import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// Public site URL — used for canonical links, OG, sitemap.
// Override at build time with SITE_URL env var when deploying.
const SITE = process.env.SITE_URL || "https://startupbasket.ai";

export default defineConfig({
  site: SITE,
  output: "static",
  integrations: [tailwind({ applyBaseStyles: false }), react(), sitemap()],
  trailingSlash: "ignore",
  adapter: cloudflare()
});