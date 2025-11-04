/**
  Vite Configuration
  Sets up Vite bundler for fast development and optimized builds
  Configures React plugin for JSX support
*/

import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
})
