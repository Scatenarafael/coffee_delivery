import React, { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import { OrderConfirmationAbstractContainer } from './styles'

export function OrderConfirmationAbstract() {
  const { state } = useContext(CartContext)

  const traslatePaymentMethod: Record<string, string> = {
    credit_card: 'Cartão de Crédito',
    debit_card: 'Cartão de Débito',
    cash: 'Dinheiro',
  }
  console.log(state)
  return (
    <OrderConfirmationAbstractContainer>
      <div className="address_confirmation">
        <img src="/src/assets/locale_icon.svg" />
        <p>
          Entrega em{' '}
          <span>{`${
            state.address.street ? state.address.street : 'Não informado'
          }, ${
            state.address.n ? state.address.n : 'Não informado'
          }`}</span>{' '}
          {`${state.address.district ? state.address.district : 'Não Informado'}
          - ${state.address.city ? state.address.city : 'Não Informado'}, ${
            state.address.state ? state.address.state : 'Não Informado'
          }`}
        </p>
      </div>
      <div className="delivery_confirmation">
        <img src="/src/assets/clock_icon.svg" />
        <p>Previsão de Entrega</p> <br />
        <span>20 min - 30 min</span>
      </div>
      <div className="payment_type_confirmation">
        <img src="/src/assets/money_icon.svg" />
        <p>Pagamento na entrega</p> <br />
        <span>
          {state.paymentType !== null
            ? traslatePaymentMethod[state.paymentType]
            : 'Não Informado'}
        </span>
      </div>
    </OrderConfirmationAbstractContainer>
  )
}
