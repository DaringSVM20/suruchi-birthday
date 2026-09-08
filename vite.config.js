import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: base must match your GitHub repo name exactly, wrapped in slashes.
// e.g. if your repo is github.com/yourname/suruchi-birthday, keep it as below.
// If you rename the repo, update this to match or the site will load with broken assets.
export default defineConfig({
  plugins: [react()],
  base: "/suruchi-birthday/",
});
