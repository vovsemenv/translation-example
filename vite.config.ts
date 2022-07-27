import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { translationPlugin } from "./src/vite-translation-plugin"

export default defineConfig({
  plugins: [react(), translationPlugin()],
});
