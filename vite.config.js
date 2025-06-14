import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/Shopping-Cart",
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./src/tests/setup.js",
    },
});
