import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://javalvyas2000.github.io",
  integrations: [tailwind(), sitemap()],
  output: "static"
});
