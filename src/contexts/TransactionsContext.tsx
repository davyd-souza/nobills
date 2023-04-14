// DEPENDENCY
import { ReactNode, createContext, useEffect, useState } from 'react'

// LIB
import { api } from '../lib/axios'

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
  fetchTransactions: (query?: string) => Promise<void>
}

type TransactionsProviderProps = {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string) {
    const res = await api.get('/transactions', {
      params: {
        q: query,
      },
    })

    setTransactions(res.data)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
