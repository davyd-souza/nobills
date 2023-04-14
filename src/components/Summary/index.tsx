// HOOK
import { useSummary } from '../../hooks/useSummary'

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

// UTIL
import { priceFormatter } from '../../utils/formatter'

// TYPE
type SummaryArticleProps = SummaryCardVariants & {}

export function Summary({ variant = 'gray' }: SummaryArticleProps) {
  const summary = useSummary()

  return (
    <section className={SummaryWrapper}>
      <article className={SummaryCard({ variant })}>
        <header className={SummaryHeader}>
          <span className={SummaryTitle({ variant })}>Income</span>
          <ArrowCircleUp size={32} color={vars.color.green[500]} />
        </header>
        <strong className={SummaryAmount}>
          {priceFormatter.format(summary.income)}
        </strong>
      </article>

      <article className={SummaryCard({ variant })}>
        <header className={SummaryHeader}>
          <span className={SummaryTitle({ variant })}>Outcome</span>
          <ArrowCircleDown size={32} color={vars.color.red[500]} />
        </header>
        <strong className={SummaryAmount}>
          {priceFormatter.format(summary.outcome)}
        </strong>
      </article>

      <article className={SummaryCard({ variant: 'yellow' })}>
        <header className={SummaryHeader}>
          <span className={SummaryTitle({ variant: 'yellow' })}>Total</span>
          <CurrencyDollar size={32} color={vars.color.gray[800]} />
        </header>
        <strong className={SummaryAmount}>
          {priceFormatter.format(summary.total)}
        </strong>
      </article>
    </section>
  )
}
