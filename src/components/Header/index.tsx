// COMPONENT
import { Button } from '../Button'

// STYLE
import { headerContainer, headerContent, logoContainer } from './styles.css'

// ASSET
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <header className={headerContainer}>
      <div className={headerContent}>
        <div className={logoContainer}>
          <img src={logo} alt="" />
          <p>Nobills</p>
        </div>

        <Button>New transaction</Button>
      </div>
    </header>
  )
}
