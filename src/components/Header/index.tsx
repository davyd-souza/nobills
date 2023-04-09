// COMPONENT
import { Button } from '../Button'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'

// STYLE
import { headerContainer, headerContent, logoContainer } from './styles.css'

// ASSET
import logo from '../../assets/logo.svg'
import { Plus } from 'phosphor-react'

export function Header() {
  return (
    <header className={headerContainer}>
      <div className={headerContent}>
        <div className={logoContainer}>
          <img src={logo} alt="" />
          <p>Nobills</p>
        </div>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button>
              New transaction
              <Plus />
            </Button>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </div>
    </header>
  )
}
