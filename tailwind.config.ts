import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import containerQueries from '@tailwindcss/container-queries'
import plugin from 'tailwindcss/plugin'
import { nextui } from '@nextui-org/react'

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
        'roboto-mono': "'Roboto Mono', serif"
      },
      colors: {
        'theme-yellow': '#FAAF32',
        'theme-light-yellow': '#FFEFD4',
        'theme-very-light-yellow': '#FFF6E8',
        'theme-blue': '#426180',
        'theme-dark-blue': '#25496D'
      }
    },
    animation: {
      fadeIn: 'fadeIn .5s ease-in-out'
    },
    keyframes: {
      fadeIn: {
        from: { opacity: '0' },
        to: { opacity: '1' }
      }
    }
  },
  darkMode: 'class',
  plugins: [
    containerQueries,
    nextui(),
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
