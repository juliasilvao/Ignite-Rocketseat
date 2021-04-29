import { createContext, useEffect, useState, ReactNode } from 'react'
import { api } from './services/api'

interface Transaction {
    id: number,
    title: string,
    value: number,
    type: string,
    category: string,
    createdAt: string
}

interface TransactionProviderProps {
    children: ReactNode
}

export const TransactionsContext = createContext<Transaction[]>([])

export function TransactionsProvider({ children }: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, [])

    return (
        <TransactionsContext.Provider value={transactions}>

        </TransactionsContext.Provider>
    )
}