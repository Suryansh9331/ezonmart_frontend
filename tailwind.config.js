/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        screens: {
          'xs': '450px',  // Small phones
          'sm': '640px',  // Default small
          'md': '768px',  // Tablets
          'lg': '1024px', // Default large
          'xl': '1280px', // Default XL
          '2xl': '1536px' // Default 2XL
        }
      }
    },
    plugins: [],
  };
  