import { defineConfig } from "vite"
import EnvironmentPlugin from "vite-plugin-environment"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react(), EnvironmentPlugin("all")],
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
