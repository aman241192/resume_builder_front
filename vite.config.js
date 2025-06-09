import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#1884330",
        primary: "#fff8f1",
        white: "#ffffff",
        darkPurple: "#b370fa",
        midPurple: "#dec7f7",
        lightPurple: "#EEE0FD",
      },
      screens: {
        "max-992": { max: "992px" },
        "max-530": { max: "530px" },
        "max-460": { max: "460px" },
      },
    },
  },

  plugins: [react(), tailwindcss()],
});
