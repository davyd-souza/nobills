// DEPENDENCY
import { useContext } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// COMPONENT
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { Button } from '../Button'

// CONTEXT
import { TransactionsContext } from '../../contexts/TransactionsContext'

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

// TYPE
const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const { createTransaction } = useContext(TransactionsContext)

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income',
    },
  })

  const handleCreateNewTransaction = async ({
    description,
    price,
    category,
    type,
  }: NewTransactionFormInputs) => {
    createTransaction({ description, price, category, type })

    reset()
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className={ModalOverlay} />

      <Dialog.Content className={ModalContent}>
        <Dialog.Title className={ModalTitle}>New Transaction</Dialog.Title>
        <Dialog.Close className={ModalClose}>
          <X size={24} />
        </Dialog.Close>

        <form
          className={ModalForm}
          id="new-transaction"
          onSubmit={handleSubmit(handleCreateNewTransaction)}
        >
          <input
            type="text"
            placeholder="Description"
            required
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Price"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Category"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <RadioGroup.Root
                  className={ModalRadioWrapper}
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <RadioGroup.Item
                    className={ModalRadioItemIncome}
                    value="income"
                  >
                    <ArrowCircleUp className={ModalRadioItemSvg} size={24} />
                    Income
                  </RadioGroup.Item>
                  <RadioGroup.Item
                    className={ModalRadioItemOutcome}
                    value="outcome"
                  >
                    <ArrowCircleDown className={ModalRadioItemSvg} size={24} />
                    Outcome
                  </RadioGroup.Item>
                </RadioGroup.Root>
              )
            }}
          ></Controller>
        </form>

        <Button form="new-transaction" disabled={isSubmitting}>
          Register
          <Plus />
        </Button>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
