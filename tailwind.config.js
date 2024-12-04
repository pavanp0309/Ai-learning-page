/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    // add custom styles if needed
    screens:{
      sm:"480px",
      md:"768px",
      lg:"976px",
      xl:"1440px"
    },
    extend: {
      // additional custom styles if required
      
    },
  },
  plugins: [],
}

