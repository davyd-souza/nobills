// DEPENDENCY
import { globalStyle, style, styleVariants } from '@vanilla-extract/css'
import { vars } from '../../styles/global.css'

export const TableWrapper = style({
  maxWidth: '70rem',
  marginInline: 'auto',
  paddingInline: '1.5rem',
})

export const Table = style({
  width: '100%',
  borderCollapse: 'separate',
  borderSpacing: '0 0.5rem',
})

globalStyle(`${Table} td`, {
  padding: '1.25rem 2rem',
  backgroundColor: vars.color.gray[700],
})

globalStyle(`${Table} td:first-child`, {
  borderTopLeftRadius: '1rem',
  borderBottomLeftRadius: '1rem',
})

globalStyle(`${Table} td:last-child`, {
  borderTopRightRadius: '1rem',
  borderBottomRightRadius: '1rem',
})

export const PriceHighlight = styleVariants({
  income: { color: vars.color.green[500] },
  outcome: { color: vars.color.red[300] },
})
