/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        task: {
          mono: {
            100: "#FFFFFF",
            200: "#F4F7FD",
            300: "#E4EBFA",
            400: "#828FA3",
            500: "#3E3F4E",
            600: "#2B2C37",
            700: "#20212C",
            800: "#111217",
            900: "#000112",
          },
          purple: {
            light: "#A8A4FF",
            dark: "#635FC7",
          },
          red: {
            normal: "#EA5555",
            light: "#FF9898",
          },
        },
      },
    },
  },
  plugins: [],
};
