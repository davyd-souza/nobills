// COMPONENT
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { Button } from '../Button'

// STYLE
import {
  ModalClose,
  ModalContent,
  ModalForm,
  ModalOverlay,
  ModalRadioItemIncome,
  ModalRadioItemOutcome,
  ModalRadioItemSvg,
  ModalRadioWrapper,
  ModalTitle,
} from './styles.css'
import { ArrowCircleDown, ArrowCircleUp, Plus, X } from 'phosphor-react'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className={ModalOverlay} />

      <Dialog.Content className={ModalContent}>
        <Dialog.Title className={ModalTitle}>New Transaction</Dialog.Title>
        <Dialog.Close className={ModalClose}>
          <X size={24} />
        </Dialog.Close>

        <form className={ModalForm} id="new-transaction">
          <input type="text" placeholder="Description" required />
          <input type="number" placeholder="Price" required />
          <input type="text" placeholder="Category" required />

          <RadioGroup.Root className={ModalRadioWrapper}>
            <RadioGroup.Item className={ModalRadioItemIncome} value="income">
              <ArrowCircleUp className={ModalRadioItemSvg} size={24} />
              Income
            </RadioGroup.Item>
            <RadioGroup.Item className={ModalRadioItemOutcome} value="outcome">
              <ArrowCircleDown className={ModalRadioItemSvg} size={24} />
              Outcome
            </RadioGroup.Item>
          </RadioGroup.Root>
        </form>

        <Button form="new-transaction">
          Register
          <Plus />
        </Button>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
