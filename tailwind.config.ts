import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1A2E',
          light: '#122444',
          dark: '#071220',
        },
        cream: {
          DEFAULT: '#F5EFE0',
        },
        rust: {
          DEFAULT: '#B94B2C',
          dark: '#9B3E25',
          light: '#C85A38',
        },
        gold: {
          DEFAULT: '#C8922A',
          light: '#D4A040',
          dark: '#A87820',
        },
        parchment: {
          DEFAULT: '#EDE5CC',
          dark: '#DDD3B5',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'Impact', 'sans-serif'],
      },
      keyframes: {
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
      },
    },
  },
  plugins: [],
}

export default config
