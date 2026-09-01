import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://oblepiha-vpn.ru',
  output: 'static',
  build: {
    format: 'directory',
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            const name = assetInfo.names?.[0] ?? '';
            return name.endsWith('.css')
              ? '_astro/[name].css'
              : '_astro/[name].[hash][extname]';
          },
        },
      },
    },
  },
  integrations: [sitemap()],
});
