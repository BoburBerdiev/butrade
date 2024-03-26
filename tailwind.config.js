/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        "currentBlue": "#14315D"
      },
      fontFamily: {
        oswald: ['var(--font-oswald)'],
        rubik: ['var(--font-rubik)'],
        notoSansDisplay: ['var(--font-noto-sans-display)'],
        notoSans: ['var(--font-noto-sans)'],
      },
    },
  },
  plugins: [],
};
