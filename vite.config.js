import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { compression } from 'vite-plugin-compression2';

export default defineConfig({
  base: './', // Ensures assets are served relative to the current directory
  plugins: [
    react(),
    compression({
      algorithm: 'gzip',
      exclude: [/\.(br)$/, /\.(gz)$/], // Exclude already compressed files
    }),
  ],
  server: {
    port: 5173, // Development server port
    strictPort: false,
    host: true, // Allows access from other devices on the network
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'react-vendor'; // Group React-related dependencies
            }
            if (id.includes('aos') || id.includes('gsap') || id.includes('lottie-react') || id.includes('framer-motion')) {
              return 'animation-vendor'; // Group animation-related dependencies
            }
            if (id.includes('@headlessui/react') || id.includes('lucide-react') || id.includes('react-icons')) {
              return 'ui-vendor'; // Group UI-related dependencies
            }
            if (id.includes('three') || id.includes('@react-three/fiber')) {
              return 'three-vendor'; // Group Three.js-related dependencies
            }
            if (id.includes('tsparticles') || id.includes('@tsparticles/react')) {
              return 'particles-vendor'; // Group particle-related dependencies
            }
            return 'vendor'; // Default chunk for other dependencies
          }
        },
      },
    },
    chunkSizeWarningLimit: 1500, // Increase the warning limit for large chunks
    minify: 'terser', // Use Terser for minification
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log statements
        drop_debugger: true, // Remove debugger statements
      },
    },
    sourcemap: false, // Disable sourcemaps for production
    reportCompressedSize: false, // Disable reporting of compressed sizes
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
      '@react-three/fiber',
    ], // Pre-bundle these dependencies for faster development
  },
});
