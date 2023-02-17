import { Bank, CreditCard, Money } from 'phosphor-react'
import React from 'react'
import { PaymentTypeBodyContainer } from './styles'

export function PaymentTypeBody() {
  return (
    <PaymentTypeBodyContainer>
      <button>
        <CreditCard size={16} />
        <span>CARTÃO DE CRÉDITO</span>
      </button>
      <button>
        <Bank size={16} />
        <span>CARTÃO DE DÉBITO</span>
      </button>
      <button>
        <Money size={16} />
        <span>DINHEIRO</span>
      </button>
    </PaymentTypeBodyContainer>
  )
}
