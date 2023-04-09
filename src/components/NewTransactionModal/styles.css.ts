// DEPENDENCY
import { globalStyle, style } from '@vanilla-extract/css'

// STYLE
import { vars } from '../../styles/global.css'

export const ModalOverlay = style({
  position: 'fixed',
  minWidth: '100vw',
  minHeight: '100vh',
  inset: 0,

  backgroundColor: 'hsl(0, 0%, 0%, 0.7)',
})

export const ModalTitle = style({
  fontSize: '1.5rem',
  fontWeight: vars.font.weight.bold,
})

export const ModalClose = style({
  all: 'unset',
  position: 'absolute',
  top: '1.5rem',
  right: '1.5rem',

  borderRadius: '.5rem',
  lineHeight: 0,
  color: vars.color.gray[500],

  transition: 'color 150ms',
  cursor: 'pointer',

  ':hover': {
    color: vars.color.yellow[400],
  },

  ':focus-visible': {
    boxShadow: `0 0 0 2px ${vars.color.gray[800]}, 0 0 0 4px ${vars.color.yellow[200]}`,
    color: vars.color.yellow[400],
  },
})

export const ModalContent = style({
  minWidth: '32rem',
  padding: '2.5rem 3rem',
  backgroundColor: vars.color.gray[800],
  borderRadius: '1rem',

  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  display: 'grid',
  gap: '1.5rem',
})

export const ModalForm = style({
  display: 'grid',
  gap: '1rem',
})

export const ModalRadioWrapper = style({
  display: 'grid',
  gridAutoFlow: 'column',
  gap: '1rem',
})

const ModalRadioItemBase = style({
  all: 'unset',

  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',

  padding: '1rem',
  borderRadius: '1rem',
  backgroundColor: vars.color.gray[700],
  color: vars.color.gray[300],

  transition: 'background-color 150ms, color 150ms',
  cursor: 'pointer',

  ':hover': {
    backgroundColor: vars.color.gray[600],
  },

  ':focus-visible': {
    boxShadow: `0 0 0 2px ${vars.color.gray[800]}, 0 0 0 4px ${vars.color.yellow[200]}`,
  },
})

export const ModalRadioItemIncome = style([
  ModalRadioItemBase,
  {
    selectors: {
      '&[data-state="checked"]': {
        backgroundColor: vars.color.green[500],
        color: vars.color.white,
      },
    },
  },
])

export const ModalRadioItemOutcome = style([
  ModalRadioItemBase,
  {
    selectors: {
      '&[data-state="checked"]': {
        backgroundColor: vars.color.red[500],
        color: vars.color.white,
      },
    },
  },
])

export const ModalRadioItemSvg = style({
  selectors: {
    [`${ModalRadioItemIncome} &`]: {
      color: vars.color.green[500],
    },
    [`${ModalRadioItemOutcome} &`]: {
      color: vars.color.red[500],
    },
    [`${ModalRadioItemIncome}[data-state="checked"] &`]: {
      color: vars.color.white,
    },
    [`${ModalRadioItemOutcome}[data-state="checked"] &`]: {
      color: vars.color.white,
    },
  },
})

globalStyle(`${ModalForm} > input`, {
  borderRadius: '1rem',
  border: 0,

  backgroundColor: vars.color.gray[900],
  color: vars.color.gray[300],

  padding: '1rem',
})

globalStyle(`${ModalForm} > input::placeholder`, {
  color: vars.color.gray[500],
})
