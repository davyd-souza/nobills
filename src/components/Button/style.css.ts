// DEPENDENCY
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

// STYLE
import { vars } from '../../styles/global.css'

export const button = recipe({
  base: {
    all: 'unset',

    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',

    paddingInline: '1.25em',
    paddingBlock: '0.75em',

    fontWeight: vars.font.weight.bold,
    borderRadius: '1rem',

    transition: 'background-color 200ms',

    cursor: 'pointer',
  },

  variants: {
    variant: {
      fill: {
        backgroundColor: vars.color.yellow[400],
        color: vars.color.gray[900],

        selectors: {
          '&:not(:disabled):hover': {
            backgroundColor: vars.color.yellow[200],
          },

          '&:focus-visible': {
            boxShadow: `0 0 0 2px ${vars.color.gray[800]}, 0 0 0 4px ${vars.color.yellow[200]}`,
          },

          '&:disabled': {
            cursor: 'not-allowed',
            opacity: 0.6,
          },
        },
      },
      outline: {
        backgroundColor: 'transparent',

        borderWidth: 1,
        borderColor: vars.color.yellow[400],
        borderStyle: 'solid',

        color: vars.color.yellow[400],

        selectors: {
          '&:not(:disabled):hover': {
            borderColor: vars.color.yellow[200],
            color: vars.color.yellow[200],
          },

          '&:focus-visible': {
            boxShadow: `0 0 0 2px ${vars.color.gray[800]}, 0 0 0 4px ${vars.color.yellow[200]}`,
          },

          '&:disabled': {
            cursor: 'not-allowed',
            opacity: 0.6,
          },
        },
      },
    },
  },
})

export type ButtonVariants = RecipeVariants<typeof button>
