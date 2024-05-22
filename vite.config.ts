import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vitest/config";
import { manifest } from "./src/configs/manifest.ts";

export default defineConfig({
  plugins: [react(), VitePWA(manifest)],

  server: {
    port: 3000,
  },

  test: {
    globals: true,
    environment: "jsdom",
    watch: false,
  },
});
