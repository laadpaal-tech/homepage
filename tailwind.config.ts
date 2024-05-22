import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import containerQueries from '@tailwindcss/container-queries'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', ...defaultTheme.fontFamily.sans],
        'roboto-mono': "'Roboto Mono', serif"
      },
      colors: {
        'theme-yellow': '#FAAF32',
        'theme-light-yellow': '#FFEFD4'
      }
    }
  },
  plugins: [containerQueries]
} satisfies Config
