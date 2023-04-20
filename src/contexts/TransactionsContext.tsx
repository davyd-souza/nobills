// DEPENDENCY
import { ReactNode, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'

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

type CreateTransactionInputs = {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

type TransactionContextType = {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInputs) => Promise<void>
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
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(res.data)
  }

  async function createTransaction({
    description,
    price,
    category,
    type,
  }: CreateTransactionInputs) {
    const res = await api.post('/transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date().toISOString(),
    })

    setTransactions((state) => [res.data, ...state])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
