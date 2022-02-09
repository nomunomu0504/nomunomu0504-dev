import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh(), VitePWA()],
  server: {
    open: true,
  },
  build: {
    outDir: "../dist",
  },
  resolve: {
    alias: [
      {
        find: "~/",
        replacement: path.join(__dirname, "src/"),
      },
    ],
  },
});
