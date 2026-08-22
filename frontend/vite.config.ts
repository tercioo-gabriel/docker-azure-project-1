import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    allowedHosts: [
      "silog-frontend.wittystone-b25df558.westus2.azurecontainerapps.io",
    ],
  },
});