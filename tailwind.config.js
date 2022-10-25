/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        background: '#F1F3F6',
        btn: '#FD7401',
        input: '#555555'
      },
      borderWidth:{
        '1': '1px solid'
      },
      padding:{
        '1': '1px'
      },
      width:{
        '100': '32.2rem'
      }
    },
  },
  plugins: [],
}
