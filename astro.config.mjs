// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [preact()]
});

/*

Define site property and link to deployed site

export default defineConfig({
    site: "site-url"
});

*/