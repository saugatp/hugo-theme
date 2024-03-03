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
              '@apply font-rubik opacity-80 antialiased text-justify': {},
            },
            h3:{
              '@apply font-lora': {}
            },
            strong:{
              '@apply font-sans': {}
            },
            em:{
              '@apply font-sans': {}
            },
            img:{
              '@apply rounded-xl shadow-xl mb-0':{}
            },
            figcaption:{
              '@apply opacity-50 mt-0 font-mono tracking-tight':{}
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
