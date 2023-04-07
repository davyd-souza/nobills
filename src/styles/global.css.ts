// DEPENDENCY
import { globalStyle, createGlobalTheme } from '@vanilla-extract/css'

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

// CSS RESET
/* 1. Use a more-intuitive box-sizing model. */
globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
})

/* 2. Remove default margin and padding & built-in form typography styles */
globalStyle('*', {
  margin: 0,
  padding: 0,
  font: 'inherit',
})

/* 3. Allow percentage-based heights in the application */
globalStyle('html, body, #root', {
  height: '100%',
})

/*
  4. Implement base background color, font and font family

  Typographic tweaks!
  5. Add accessible line-height
  6. Improve text rendering
*/
globalStyle('body', {
  backgroundColor: vars.color.gray[800],
  color: vars.color.gray[100],
  fontFamily: vars.font.family.sans,
  lineHeight: 1.7,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
})

/* 7. Improve media defaults */
globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
})

/* 8. Remove built-in form typography styles */
globalStyle('input, button, textarea, select, a', {
  font: 'inherit',
})

/* 9. Avoid text overflows */
globalStyle('p, h1, h2, h3, h4, h5, h6', {
  overflowWrap: 'break-word',
})

globalStyle(':focus-visible', {
  outline: 0,
  boxShadow: `0 0 0 2px ${vars.color.gray[800]}, 0 0 0 4px ${vars.color.yellow[200]}`,
})
