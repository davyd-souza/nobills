// DEPENDENCY
import { style } from '@vanilla-extract/css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

// STYLE
import { vars } from '../../styles/global.css'

export const SummaryWrapper = style({
  maxWidth: '70rem',
  marginInline: 'auto',
  paddingInline: '1.5rem',

  display: 'grid',
  gridAutoFlow: 'column',
  gap: '2rem',

  marginBlockStart: '-5rem',
  marginBlockEnd: '5rem',
})

export const SummaryCard = recipe({
  base: {
    paddingInline: '1rem',
    paddingBlock: '2rem',
    borderRadius: '1rem',

    display: 'grid',
    gap: '1rem',
  },

  variants: {
    variant: {
      yellow: {
        backgroundColor: vars.color.yellow[400],
        color: vars.color.gray[700],
      },
      gray: {
        backgroundColor: vars.color.gray[600],
      },
    },
  },
})

export const SummaryAmount = style({
  fontSize: '2rem',
  fontWeight: vars.font.weight.bold,
})

export const SummaryHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const SummaryTitle = recipe({
  variants: {
    variant: {
      yellow: {
        color: vars.color.gray[800],
      },
      gray: {
        color: vars.color.gray[300],
      },
    },
  },
})

export type SummaryCardVariants = RecipeVariants<typeof SummaryCard>
export type SummaryTitleVariants = RecipeVariants<typeof SummaryTitle>
