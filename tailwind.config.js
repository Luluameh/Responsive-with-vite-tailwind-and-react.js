/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1280px', // Set the lg breakpoint to 1280px
        xl: '1440px', // Add a new xl breakpoint at 1440px
        '2xl': '1920px', // Add a new 2xl breakpoint at 1920px
      },
  

    },
  },
  plugins: [],
}

