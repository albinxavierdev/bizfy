import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://docs.google.com/spreadsheets/d/1fHGL8R7Cvjs67MEf0iHTAcrfqI-9pLpMiRgZWWV6YeI/edit?gid=0#gid=0', // Backend server
        changeOrigin: true, // Ensures the origin of the host header matches the target
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional: Remove '/api' from the request path
      },
    },
  },
})
