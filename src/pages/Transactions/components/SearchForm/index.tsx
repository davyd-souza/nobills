// STYLE
import { MagnifyingGlass } from 'phosphor-react'
import { button } from '../../../../components/Button/style.css'
import { SearchFormInput, SearchFormWrapper } from './styles.css'

export function SearchForm() {
  return (
    <form className={SearchFormWrapper}>
      <input
        type="text"
        className={SearchFormInput}
        placeholder="Search for transactions..."
      />
      <button className={button({ variant: 'outline' })}>
        <MagnifyingGlass size={20} />
        Search
      </button>
    </form>
  )
}
