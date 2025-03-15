import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { splitVendorChunkPlugin } from 'vite'
import { compression } from 'vite-plugin-compression2'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    compression({
      algorithm: 'gzip',
      exclude: [/\.(br)$/, /\.(gz)$/],
    }),
  ],
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    proxy: {
      '/api': {
        target: 'https://script.google.com/macros/s/AKfycbxrjHfa0_rUUADlo7_fSc-OiPt-MrgGM8rgyRpZFjH2gOfT1XsP0EE-YcEyF7ssTTCAqg/exec', // Backend server
        changeOrigin: true,
        secure: false, // Ensures the origin of the host header matches the target
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional: Remove '/api' from the request path
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['aos', 'gsap', 'lottie-react', 'framer-motion'],
          'ui-vendor': ['@headlessui/react', 'lucide-react', 'react-icons'],
          'three-vendor': ['three', '@react-three/fiber'],
          'particles-vendor': ['tsparticles', '@tsparticles/react', 'react-tsparticles'],
        },
      },
    },
    chunkSizeWarningLimit: 1500,
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
      },
    },
    sourcemap: false,
    reportCompressedSize: false,
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom',
      'aos', 
      'gsap',
      'framer-motion',
      '@emailjs/browser',
      'three',
      '@react-three/fiber'
    ],
    exclude: ['firebase'],
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
})
