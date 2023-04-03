// DEPENDENCY
import { createGlobalTheme } from '@vanilla-extract/css'

// THEME
export const vars = createGlobalTheme(':root', {
  color: {
    white: '#fff',

    gray: {
      100: '#e1e1e6',
      300: '#c4c4cc',
      400: '#8d8d99',
      500: '#7c7c8a',
      600: '#323238',
      700: '#29292e',
      800: '#202024',
      900: '#121214',
    },

    yellow: {
      400: '#e1ad01',
      300: '#e7bd34',
      200: '#edce67',
    },

    red: {
      300: '#f75a68',
      500: '#ab222e',
      700: '#7a1921',
    },

    green: {
      500: '#00875F',
    },
  },

  font: {
    family: {
      sans: 'Inter, sans-serif',
    },

    weight: {
      regular: '400',
      bold: '700',
    },
  },
})
