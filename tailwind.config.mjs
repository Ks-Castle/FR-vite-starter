/** @type {import('tailwindcss').Config} */
import animatePlugin from 'tailwindcss-animate'
import radixPlugin from 'tailwindcss-radix'
import { extendedTheme } from './src/shared/extended-theme'
import defaultTheme from 'tailwindcss/defaultTheme.js'

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        xl: '1200px',
        '2xl': '1400px'
      }
    },
    extend: {
      ...extendedTheme,
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [animatePlugin, radixPlugin]
}
