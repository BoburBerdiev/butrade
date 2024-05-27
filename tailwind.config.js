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
        lg: '2rem',
        '2xl': '3rem',
      },
    },
    extend: {
      minHeight: {
        'calc-100vh-88px': 'calc(100vh-88px)',
      },
      colors: {
        "currentBlue": "#14315D",
        'currentGray':'#8A8A8A',
        "iconblue":"#0F1F39",
        "linegrey":"#D9D9D9",
      },
      fontFamily: {
        oswald: ['var(--font-oswald)'],
        rubik: ['var(--font-rubik)'],
        notoSansDisplay: ['var(--font-noto-sans-display)'],
        notoSans: ['var(--font-noto-sans)'],
      },
      boxShadow: {
        'categoryCard': '0 2px 10px 0px rgba(0, 0, 0, 0.12)',
        'infoProductPrice': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
};
