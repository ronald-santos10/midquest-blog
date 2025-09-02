import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import astroSEO from 'astro-seo-plugin';

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://midquest.com.br",
  integrations: [
    astroSEO(),
    tailwind(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    sitemap(),
  ],
  // ...
});
