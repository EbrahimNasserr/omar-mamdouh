/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['var(--font-vip)', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/css_sprites.png')",
        'about-pattern': "url('/rocky.png')",
        'preloader-pattern': "url('/green-hand-draw-visual-thinking.png')"
      },
      colors: {
        'custom-blue': '#4ba3c3',
        'custom-yellow': '#fcd34d',
      },
    },
  },
  plugins: [],
  darkMode: "class"
};
