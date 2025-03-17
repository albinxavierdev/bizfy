import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { compression } from 'vite-plugin-compression2'

export default defineConfig({
  base: './', // Add this line
  plugins: [
    react(),
    compression({
      algorithm: 'gzip',
      exclude: [/\.(br)$/, /\.(gz)$/],
    }),
  ],
  server: {
    port: 5173,
    strictPort: false,
    host: true,
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
      }
    },
    chunkSizeWarningLimit: 1500,
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
      'three',
      '@react-three/fiber'
    ]
  }
})
