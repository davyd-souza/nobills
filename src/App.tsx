// PAGE
import { Transactions } from './pages/Transactions'

// CONTEXT
import { TransactionsProvider } from './contexts/TransactionsContext'

export function App() {
  return (
    <TransactionsProvider>
      <Transactions />
    </TransactionsProvider>
  )
}
