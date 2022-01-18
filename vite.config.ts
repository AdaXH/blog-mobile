/* eslint-disable @typescript-eslint/ban-ts-comment */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import replace from '@rollup/plugin-replace';
import eslintPlugin from 'vite-plugin-eslint';
import path from 'path';
import { ManifestOptions, VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
const isDev = process.env.NODE_ENV === 'development';

const replaceOptions = { __DATE__: new Date().toISOString() };
const claims = process.env.CLAIMS === 'true';
const reload = process.env.RELOAD_SW === 'true';

const pwaOptions: Partial<VitePWAOptions> = {
  mode: isDev ? 'development' : 'production',
  base: '/',
  workbox: {
    sourcemap: true,
  },
  includeAssets: [],
  registerType: 'autoUpdate',
  devOptions: { enabled: true },
  manifest: {
    short_name: 'Ada - Home',
    name: 'Ada - Home - application',
    display: 'standalone',
    description: 'support for pwa',
    icons: [
      {
        src: 'https://tvax1.sinaimg.cn/crop.0.0.640.640.180/a99a6e98ly8ggdx2amqlaj20hs0hswsl.jpg',
        sizes: '192x192',
        type: 'image/jpg',
      },
    ],
  },
};

// if (process.env.SW === 'true') {
pwaOptions.srcDir = 'src';
pwaOptions.filename = claims ? 'claims-sw.ts' : 'pro-sw.ts';
pwaOptions.strategies = 'injectManifest';
(pwaOptions.manifest as Partial<ManifestOptions>).name = 'PWA Inject Manifest';
(pwaOptions.manifest as Partial<ManifestOptions>).short_name = 'PWA Inject';
// }

if (claims) pwaOptions.registerType = 'autoUpdate';

if (reload) {
  // @ts-ignore
  replaceOptions.__RELOAD_SW__ = 'true';
}

export default defineConfig({
  plugins: [eslintPlugin, react(), VitePWA(pwaOptions), replace(replaceOptions)],
  base: isDev ? '/' : 'https://bucker-for-sae.oss-cn-hangzhou.aliyuncs.com/blog/blog-mobile/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5050',
        changeOrigin: true,
        rewrite: (path) => path.replace('/api', ''),
      },
    },
  },
  css: {
    modules: {
      hashPrefix: '',
      generateScopedName: '',
    },
  },
  build: {
    manifest: false,
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});
