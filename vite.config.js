import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://test-bizfy.vercel.app/', // Backend server
        changeOrigin: true, // Ensures the origin of the host header matches the target
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional: Remove '/api' from the request path
      },
    },
  },
})
