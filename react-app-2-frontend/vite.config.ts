import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
   server: {
      port: 5000,
      watch: {
         usePolling: true,
      },
   },
   resolve: {
      alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
   },
})