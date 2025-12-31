import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// без @tailwindcss/vite можно обойтись, если используешь postcss
export default defineConfig({
  plugins: [react()],
})
