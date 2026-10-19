import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// In development, requests to /api are proxied to the Express server,
// so no CORS or env setup is needed locally.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
});
