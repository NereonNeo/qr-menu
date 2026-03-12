import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import Unfonts from "unplugin-fonts/vite";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({ routesDirectory: "src/pages", generatedRouteTree: "src/app/routes/routeTree.gen.ts" }),
    svgr(),
    react(),
    tailwindcss(),
    Unfonts({
      google: {
        display: "swap",
        preconnect: true,
        injectTo: "head-prepend",
        families: [
          {
            defer: false,
            name: "Kodchasan",
            styles: "wght@400;600;700",
          },
        ],
      },
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
  server: { port: 3000 },
});
