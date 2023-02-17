import { CurrencyDollar } from 'phosphor-react'
import React from 'react'
import { PaymentTypeHeaderContainer } from './styles'

export function PaymentTypeHeader() {
  return (
    <PaymentTypeHeaderContainer>
      <CurrencyDollar size={22} />
      <div>
        <p>Pagamento</p>
        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
      </div>
    </PaymentTypeHeaderContainer>
  )
}
