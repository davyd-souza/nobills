// DEPENDENCY
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// CONTEXT
import { TransactionsContext } from '../../../../contexts/TransactionsContext'

// STYLE
import { MagnifyingGlass } from 'phosphor-react'
import { button } from '../../../../components/Button/style.css'
import { SearchFormInput, SearchFormWrapper } from './styles.css'

// TYPE
const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionsContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const handleSearchTransactions = async ({ query }: SearchFormInputs) => {
    await fetchTransactions(query)
  }

  return (
    <form
      className={SearchFormWrapper}
      onSubmit={handleSubmit(handleSearchTransactions)}
    >
      <input
        type="text"
        className={SearchFormInput}
        placeholder="Search for transactions..."
        {...register('query')}
      />
      <button
        className={button({ variant: 'outline' })}
        disabled={isSubmitting}
      >
        <MagnifyingGlass size={20} />
        Search
      </button>
    </form>
  )
}
