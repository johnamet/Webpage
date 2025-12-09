import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages configuration - Custom domain uses root path
  base: '/',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  build: {
    // Performance optimizations
    rollupOptions: {
      output: {
        // Manual chunking for better caching
        manualChunks: {
          // Vendor chunk for external dependencies
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // Animation libraries chunk
          animations: ['framer-motion'],
          // Helmet for SEO
          seo: ['react-helmet-async']
        }
      }
    },
    // Enable source maps for production debugging
    sourcemap: false,
    // Minify for smaller bundles
    minify: 'esbuild',
    // Target modern browsers for better optimization
    target: 'es2020',
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Asset optimization
    assetsInlineLimit: 4096
  },
  // Performance optimizations for dev
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion']
  },
  // Server configuration
  server: {
    // Enable compression
    open: true,
    port: 3000,
    // HMR configuration to fix WebSocket issues
    hmr: {
      port: 24678
    }
  }
})
