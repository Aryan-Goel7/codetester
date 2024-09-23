import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy /api requests to the backend server
      "/api": {
        target: "http://127.0.0.1:3000", // Backend server address
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""), // Optional: Remove the '/api' prefix when forwarding to target
      },
    },
  },
});
