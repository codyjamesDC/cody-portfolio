import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base must match your GitHub repo name for GitHub Pages deployment.
// Change '/my-portfolio/' to '/<your-repo-name>/' if different.
export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/',
})
