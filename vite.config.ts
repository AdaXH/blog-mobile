import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import path from 'path';

// https://vitejs.dev/config/
const isDev = process.env.NODE_ENV === 'development';
console.log('isDev', isDev);
export default defineConfig({
  plugins: [eslintPlugin, react()],
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
