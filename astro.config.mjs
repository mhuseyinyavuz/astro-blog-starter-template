import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import React from "@astrojs/react";

export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), React()],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});
