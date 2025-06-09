import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    // tsconfigPaths(),
    tailwindcss({
      config: {
        content: [
          "./src/**/*.{js,jsx,ts,tsx}",
          "./public/index.html",
        ],
        theme: {
          extend: {},
        },
        plugins: [],
      },
    })
  ],
})
