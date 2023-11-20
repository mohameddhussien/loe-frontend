/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'crayota-200': '#FF80AB',
        'crayota-400': '#FF4081',
      },
      backgroundImage: {
        'light-pink-liquid': 'url("/light_pink_liquid_bg.gif")',
        'dark-pink-liquid': "url('/dark_pink_liquid_bg.gif')",
      }
    },

  },
  plugins: [],
}

