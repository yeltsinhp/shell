import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shell",
      remotes: {
        // microfront1: "http://localhost:3001/assets/remoteEntry.js",
        // microfront2: "http://localhost:3002/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "styled-components", "@reduxjs/toolkit"],
    }),
  ],
  server: { port: 3000 },
});
