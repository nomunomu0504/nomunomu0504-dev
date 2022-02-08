import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  root: "./src",
  plugins: [react(), , VitePWA()],
  server: {
    open: true,
  },
  build: {
    outDir: "../dist",
  },
});
