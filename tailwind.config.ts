import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import containerQueries from '@tailwindcss/container-queries'
import plugin from 'tailwindcss/plugin'

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
        'theme-light-yellow': '#FFEFD4',
        'theme-blue': '#426180',
        'theme-dark-blue': '#25496D'
      }
    }
  },
  plugins: [
    containerQueries,
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-theme': {
          '@supports (scrollbar-width: auto)': {
            '&': {
              'scrollbar-width': 'thin',
              'scrollbar-color': 'black transparent'
            }
          },
          '@supports selector(::-webkit-scrollbar)': {
            '&::-webkit-scrollbar': {
              width: '10px',
              height: '10px'
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'black',
              'border-radius': '10px'
            },
            '&::-webkit-scrollbar-track': {
              background: 'transparent'
            }
          }
        }
      })
    })
  ]
} satisfies Config
