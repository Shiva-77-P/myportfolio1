import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// REPLACE 'myportfolio1' with your actual repository name if it's different
export default defineConfig({
  plugins: [react()],
  base: "/myportfolio1/",
})
