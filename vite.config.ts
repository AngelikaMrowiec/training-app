// vite.config.ts
import { defineConfig } from "vite";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/training-app/",
  plugins: [
    TanStackRouterVite(),
    VitePWA({
      manifest: {
        name: 'My Training App',
        short_name: 'MyTrainingApp',
        description: 'My Training App description',
        theme_color: '#ffffff',
      },
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
    }),
  ],
});
