import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://script.google.com/macros/s/AKfycbxrjHfa0_rUUADlo7_fSc-OiPt-MrgGM8rgyRpZFjH2gOfT1XsP0EE-YcEyF7ssTTCAqg/exec', // Backend server
        changeOrigin: true,
        secure: false, // Ensures the origin of the host header matches the target
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional: Remove '/api' from the request path
      },
    },
  },
})
