// DEPENDENCY
import { ReactNode, createContext, useEffect, useState } from 'react'

// TYPE
type Transaction = {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

type TransactionContextType = {
  transactions: Transaction[]
}

type TransactionsProviderProps = {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then((res) => res.json())
      .then((data) => setTransactions(data))
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
