import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://your-site-url.com',
  outDir: './dist',
  integrations: [tailwind()],
});