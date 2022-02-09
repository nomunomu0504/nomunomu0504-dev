import reactRefresh from "@vitejs/plugin-react-refresh";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import viteReactJsx from "vite-react-jsx";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    viteReactJsx(),
    VitePWA({
      strategies: "injectManifest",
      manifest: {
        // content of manifest
      },
    }),
    vanillaExtractPlugin(),
  ],
  server: {
    open: true,
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
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
