// COMPONENT
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'

// STYLE
import { TableWrapper, Table, PriceHighlight } from './styles.css'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <main className={TableWrapper}>
        <table className={Table}>
          <tbody>
            <tr>
              <td>Freelance as GM for Dante&apos;s TTRPG</td>
              <td>
                <span className={PriceHighlight.income}>$ 5,000.00</span>
              </td>
              <td>Work</td>
              <td>05/04/2023</td>
            </tr>
            <tr>
              <td>Eat sushi</td>
              <td>
                <span className={PriceHighlight.outcome}>- $ 89.00</span>
              </td>
              <td>Food</td>
              <td>04/04/2023</td>
            </tr>
            <tr>
              <td>Apartment&apos;s rent</td>
              <td>
                <span className={PriceHighlight.outcome}>- $ 1,200.00</span>
              </td>
              <td>Home</td>
              <td>01/04/2023</td>
            </tr>
            <tr>
              <td>Salary</td>
              <td>
                <span className={PriceHighlight.income}>$ 3,500.00</span>
              </td>
              <td>Work</td>
              <td>05/04/2023</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  )
}
