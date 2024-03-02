/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layouts/**/*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      typography:(theme) =>({
        DEFAULT:{
          css:{
            p:{
              '@apply font-rubik opacity-80 antialiased': {},
            },
            h3:{
              '@apply font-lora': {}
            },
            strong:{
              '@apply font-sans': {}
            },
            em:{
              '@apply font-sans': {}
            }
          }
        }
      }),
      fontFamily: {
        lora: "'Lora', serif",
        dm: "'DM Mono', monospaced",
        rubik:"'Rubik', sans-serif"
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
