// @ts-check
import { defineConfig } from 'astro/config';
import { siteUrl } from './src/data/constants';
import sitemap from '@astrojs/sitemap';

const excludedPages = [
  '/thanks/',
].map((slug) => `${siteUrl}${slug}`);

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  integrations: [sitemap({
      filter: (page) => !excludedPages.includes(page),
  })]
});