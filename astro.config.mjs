import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  image: {},
  integrations: [tailwind({
    applyBaseStyles: false
  }), react({})],
  output: "server",
  adapter: netlify()
});