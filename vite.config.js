import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteFaviconsPlugin } from "vite-plugin-favicon2";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ViteFaviconsPlugin("./assets/favicon_io/favicon-192x192.png"),
    react(),
  ],
});
