// DEPENDENCY
import dayjs from 'dayjs'

// COMPONENT
import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'

// STYLE
import { TableWrapper, Table, PriceHighlight } from './styles.css'

// TYPE
type Transaction = {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

export function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then((res) => res.json())
      .then((data) => setTransactions(data))
  }, [])

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
