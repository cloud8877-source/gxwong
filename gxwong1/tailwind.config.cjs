/**
 * Auto-generated CommonJS copy of tailwind.config.ts so PostCSS/Tailwind can
 * load the config at runtime without requiring TypeScript support.
 */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a5f',
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#b3c2d1',
          300: '#889db0',
          400: '#5d7d96',
          500: '#1e3a5f',
          600: '#172d4a',
          700: '#101f35',
          800: '#0a1420',
          900: '#1e3a5f',
        },
        secondary: {
          DEFAULT: '#d4a574',
          50: '#f9f5f0',
          100: '#f3ebe1',
          200: '#e7d6c3',
          300: '#dbb8a0',
          400: '#d4a574',
          500: '#cd9251',
          600: '#b57d42',
          700: '#9b6337',
          800: '#814f30',
          900: '#6a422b',
        },
        accent: {
          DEFAULT: '#008b8b',
          50: '#e6f7f7',
          100: '#cceeee',
          200: '#99dddd',
          300: '#66cccc',
          400: '#33bbbb',
          500: '#008b8b',
          600: '#006d6d',
          700: '#005050',
          800: '#003434',
          900: '#001919',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
