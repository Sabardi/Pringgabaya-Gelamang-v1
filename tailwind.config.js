/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pringgabayagelamang/**/*.{html,js}"],
  theme: {
    container:{
      center:true,
      padding:'16px',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('pringgabayagelamang/asset/img/gelamang logo.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors:{
        primary: '#14b8a6',
        secondary: '#64748b',
        black: '#020617',
      },
      screens:{
        '2xl' : '1320px',
      }
    },
  },
  plugins: [],
}

