import { style } from '@vanilla-extract/css'
import { vars } from '../../../../styles/global.css'

export const SearchFormWrapper = style({
  display: 'flex',
  gap: '1rem',
})

export const SearchFormInput = style({
  flex: 1,

  borderRadius: '1rem',
  border: 0,

  backgroundColor: vars.color.gray[900],
  color: vars.color.gray[300],

  padding: '1rem',

  '::placeholder': {
    color: vars.color.gray[500],
  },
})
