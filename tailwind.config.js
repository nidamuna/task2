/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        'hero-image': 'url("./assets/Wallpaper.png")',
        'card1-image': 'url("./assets/post1.png")',
        'card2-image': 'url("./assets/post2.png")',
        'card3-image': 'url("./assets/post3.png")',
        'shadow-image': 'url("./assets/shadow.png")',
        'presensi-image': 'url("./assets/bgpresensi.png")',
      },
    },
  },
  plugins: [],
};
