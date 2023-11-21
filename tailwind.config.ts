import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "880px",
      md: "904px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-wezly-primary":
          "linear-gradient(90deg, rgba(0,108,111,1) 60%, rgba(0,132,136,1) 74%)",
        "wezly-button": "linear-gradient(65deg,#004242,#009297);",
      },
      backgroundColor: {
        "custom-wezly-primary": "#4e9cde",
      },
      colors: {
        "custom-wezly-primary": "rgb(0 108 111)",
      },
    },
  },
  plugins: [],
};
export default config;
