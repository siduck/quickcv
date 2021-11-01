import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "https://siduck.github.io/cv-project/",
  plugins: [react()],
});
