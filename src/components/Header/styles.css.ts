// DEPENDENCY
import { globalStyle, style } from '@vanilla-extract/css'

// STYLE
import { vars } from '../../styles/global.css'

export const headerContainer = style({
  backgroundColor: vars.color.gray[900],
  paddingBlockStart: '2.5rem',
  paddingBlockEnd: '7.5rem',
})

export const headerContent = style({
  maxWidth: '70rem',
  marginInline: 'auto',
  paddingInline: '1.5rem',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const logoContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
})

globalStyle(`${logoContainer} > p`, {
  fontSize: '1.25rem',
  fontWeight: vars.font.weight.bold,
  userSelect: 'none',
})

globalStyle(`${logoContainer} > img`, {
  height: '2.5rem',
  aspectRatio: 1,
})
