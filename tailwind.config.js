/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4845DE",
          secondary: "#6F37DB",
          accent: "#4845DE",
          neutral: "#FAFAFA",
          "base-100": "#FAFAFA",
          info: "#0000ff",
          success: "#00ffff",
          warning: "#00ff00",
          error: "#ff0000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
