import React from 'react'
import { AddressFormHeaderComponent } from '../../components/AddressForm/Header'
import { AddressFormInputs } from '../../components/AddressForm/View'
import { CartAbstract } from '../../components/CartAbstract'
import { PaymentType } from '../../components/PaymentType'
import { CheckoutContainer } from './styles'
import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export const addressFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o cep'),
  street: zod.string().min(1, 'Informe a rua'),
  n: zod.number().positive().nullable(),
  complement: zod.string().min(1, 'Informe o complemento'),
  district: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().min(1, 'Informe estado'),
})

export type addressFormData = zod.infer<typeof addressFormValidationSchema>

export default function Checkout() {
  const addressForm = useForm<addressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
    defaultValues: {
      cep: '',
      city: '',
      complement: '',
      district: '',
      n: null,
      state: '',
      street: '',
    },
  })

  return (
    <CheckoutContainer>
      <FormProvider {...addressForm}>
        <div className="payment_and_delivery">
          <AddressFormHeaderComponent />
          <AddressFormInputs />
          <PaymentType />
        </div>
        <div className="cart_abstract">
          <CartAbstract />
        </div>
      </FormProvider>
    </CheckoutContainer>
  )
}
