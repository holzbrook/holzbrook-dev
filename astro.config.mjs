// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  site: 'https://holzbrook.dev',
  output: 'static',
  outDir: 'dist',
  cacheDir: 'cache',
  integrations: [
    icon({
      iconDir: 'src/lib/ui/icons/local',
    }),
    sitemap(),
  ],
  vite: {
    clearScreen: false,
    plugins: [tailwindcss()],
  },
});
