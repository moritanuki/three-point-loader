/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    extend: {
      colors: {
        white: {
          default: '#fff',
          blur: 'rgb(255 255 255 / .3)',
        },
        gray: '#aaa',
      }
    },
  },
  plugins: [],
}
