// STYLE
import { vars } from '../../styles/global.css'
import {
  SummaryWrapper,
  SummaryCard,
  SummaryCardVariants,
  SummaryHeader,
  SummaryAmount,
  SummaryTitle,
} from './styles.css'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

// TYPE
type SummaryArticleProps = SummaryCardVariants & {}

export function Summary({ variant = 'gray' }: SummaryArticleProps) {
  return (
    <section className={SummaryWrapper}>
      <article className={SummaryCard({ variant })}>
        <header className={SummaryHeader}>
          <span className={SummaryTitle({ variant })}>Income</span>
          <ArrowCircleUp size={32} color={vars.color.green[500]} />
        </header>
        <strong className={SummaryAmount}>$ 17,400.00</strong>
      </article>

      <article className={SummaryCard({ variant })}>
        <header className={SummaryHeader}>
          <span className={SummaryTitle({ variant })}>Outcome</span>
          <ArrowCircleDown size={32} color={vars.color.red[500]} />
        </header>
        <strong className={SummaryAmount}>$ 1,259.00</strong>
      </article>

      <article className={SummaryCard({ variant: 'yellow' })}>
        <header className={SummaryHeader}>
          <span className={SummaryTitle({ variant: 'yellow' })}>Total</span>
          <CurrencyDollar size={32} color={vars.color.gray[800]} />
        </header>
        <strong className={SummaryAmount}>$ 16,141.00</strong>
      </article>
    </section>
  )
}
