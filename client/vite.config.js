import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // This will allow access from any device on the same network
    port: 3000, // Optional: set the port (default is 3000)
  },
});
