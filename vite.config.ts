import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shell",
      remotes: {
        pokemonMicrofront: "http://localhost:3001/assets/remoteEntry.js", // ✅ Verificar la URL
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: { port: 3000 },
});
