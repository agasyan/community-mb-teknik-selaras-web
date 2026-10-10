import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mb-teknik-selaras.pages.dev',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
