/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'], // Add Rubik as a custom font
      },
      spacing: {
        container: '1200px',
      },
      colors: {
        primaryColor: '#FF6A1A',
        blackColor:  '#212337',
        greenColor:"#749B3F",
        greyColor:"#4A4A52",
        grey80:"#A6A6A6",
        grey50:"#D9D9D9",
        grey20:"#767676",
        bgImg:"#F4F6F6"
      
      },
    },
  },
  plugins: [],
}