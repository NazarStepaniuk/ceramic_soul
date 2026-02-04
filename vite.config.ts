import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: [["babel-plugin-react-compiler"]],
            },
        }),
        viteImagemin({
            gifsicle: {
                optimizationLevel: 7,
                interlaced: false,
            },
            optipng: {
                optimizationLevel: 7,
            },
            mozjpeg: {
                quality: 75,
            },
            pngquant: {
                quality: [0.7, 0.9],
                speed: 4,
            },
            svgo: {
                plugins: [
                    { name: "removeViewBox", active: false },
                    { name: "removeEmptyAttrs", active: false },
                ],
            },
        }),
    ],
});
