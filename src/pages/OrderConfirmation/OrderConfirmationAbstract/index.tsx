import React from 'react'
import { OrderConfirmationAbstractContainer } from './styles'

export function OrderConfirmationAbstract() {
  return (
    <OrderConfirmationAbstractContainer>
      <div className="address_confirmation">
        <img src="/src/assets/locale_icon.svg" />
        <p>
          Entrega em <span>Rua João Daniel Martinelli, 102</span> Farrapos -
          Porto Alegre, RS
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
        <span>Cartão de Crédito</span>
      </div>
    </OrderConfirmationAbstractContainer>
  )
}
