import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          multimedia: ['swiper', 'react-player']
        }
      }
    },
    copyPublicDir: true
  },
  publicDir: 'public',
  assetsInclude: ['**/*.mp4', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@public': path.resolve(__dirname, './public')
    }
  },
  base: '/',
  server: {
    fs: {
      allow: ['..']
    }
  }
});