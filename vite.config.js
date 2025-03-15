import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { compression } from 'vite-plugin-compression2'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
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
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'react-vendor';
            }
            if (id.includes('aos') || id.includes('gsap') || id.includes('lottie-react') || id.includes('framer-motion')) {
              return 'animation-vendor';
            }
            if (id.includes('@headlessui/react') || id.includes('lucide-react') || id.includes('react-icons')) {
              return 'ui-vendor';
            }
            if (id.includes('three') || id.includes('@react-three/fiber')) {
              return 'three-vendor';
            }
            if (id.includes('tsparticles') || id.includes('@tsparticles/react')) {
              return 'particles-vendor';
            }
            return 'vendor';
          }
        }
      },
    },
    chunkSizeWarningLimit: 1500,
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    sourcemap: false,
    reportCompressedSize: false
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
    ]
  },
  esbuild: {
    jsxInject: `