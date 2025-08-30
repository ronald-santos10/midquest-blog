/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blue: "#00A4FF",
        gray: "#161616",
        boldborder: "#2C2C2C",
        thinborder: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
