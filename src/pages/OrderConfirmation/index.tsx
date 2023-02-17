import React from 'react'
import { OrderConfirmationAbstract } from './OrderConfirmationAbstract'
import { OrderConfirmationPageContainer } from './styles'

export default function OrderConfirmationPage() {
  return (
    <OrderConfirmationPageContainer>
      <div className="left_side_container">
        <p className="page_title">Uhu! Pedido confirmado</p>
        <p className="page_subtitle">
          Agora é só aguardar que logo o café chegará até você
        </p>
        <OrderConfirmationAbstract />
      </div>
      <img src="/src/assets/confirmation_page_image.png" alt="ENTREGADOR" />
    </OrderConfirmationPageContainer>
  )
}
