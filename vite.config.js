import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Site_GTA/', // 👈 ВАЖНО: имя твоего репозитория
  plugins: [react(), tailwindcss()],
})