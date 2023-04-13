// DEPENDENCY
import { useContext } from 'react'

// CONTEXT
import { TransactionsContext } from '../../contexts/TransactionsContext'

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
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
        acc.total += transaction.price
      } else {
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }

      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return (
    <section className={SummaryWrapper}>
      <article className={SummaryCard({ variant })}>
        <header className={SummaryHeader}>
          <span className={SummaryTitle({ variant })}>Income</span>
          <ArrowCircleUp size={32} color={vars.color.green[500]} />
        </header>
        <strong className={SummaryAmount}>
          $ {summary.income.toLocaleString()}
        </strong>
      </article>

      <article className={SummaryCard({ variant })}>
        <header className={SummaryHeader}>
          <span className={SummaryTitle({ variant })}>Outcome</span>
          <ArrowCircleDown size={32} color={vars.color.red[500]} />
        </header>
        <strong className={SummaryAmount}>
          $ {summary.outcome.toLocaleString()}
        </strong>
      </article>

      <article className={SummaryCard({ variant: 'yellow' })}>
        <header className={SummaryHeader}>
          <span className={SummaryTitle({ variant: 'yellow' })}>Total</span>
          <CurrencyDollar size={32} color={vars.color.gray[800]} />
        </header>
        <strong className={SummaryAmount}>
          $ {summary.total.toLocaleString()}
        </strong>
      </article>
    </section>
  )
}
