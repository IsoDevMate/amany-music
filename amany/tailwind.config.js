/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary:'#2b3452',
        secondary:'#bc4123',
      },
    },
  },
  plugins: [],
}