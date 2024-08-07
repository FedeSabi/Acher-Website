// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: { 
      fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.marker-red': {
          '::marker': {
            color: '#FF0000',
          },
        },
      });
    },
  ],
};
