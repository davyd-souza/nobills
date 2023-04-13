// DEPENDENCY
import { useContext } from 'react'
import dayjs from 'dayjs'

// COMPONENT
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'

// STYLE
import { TableWrapper, Table, PriceHighlight } from './styles.css'

// CONTEXT
import { TransactionsContext } from '../../contexts/TransactionsContext'

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />

      <main className={TableWrapper}>
        <SearchForm />

        <table className={Table}>
          <tbody>
            {transactions.map(
              ({ id, description, type, price, category, createdAt }) => (
                <tr key={id}>
                  <td>{description}</td>
                  <td>
                    <span className={PriceHighlight[type]}>
                      $ {price.toLocaleString()}
                    </span>
                  </td>
                  <td>{category}</td>
                  <td>{dayjs(createdAt).format('DD/MM/YYYY')}</td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </main>
    </div>
  )
}
