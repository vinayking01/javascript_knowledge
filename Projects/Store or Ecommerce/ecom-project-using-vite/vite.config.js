// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname,"index.html"),
        Showing_Final_Cart: resolve(__dirname, "ShowingFinal_CartList.html"), // Your main entry point (e.g., home page)
        // Add more entry points for other HTML files as needed
      },
    },
  },
});
