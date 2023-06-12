import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteFaviconsPlugin } from "vite-plugin-favicon2";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ViteFaviconsPlugin("./public/favicon_io/favicon-32x32.png"),
    react(),
  ],
});
