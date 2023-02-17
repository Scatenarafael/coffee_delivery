import React from 'react'
import { Link } from 'react-router-dom'
import { CartAbstractFooterContainer } from './styles'

interface ICartAbstractFooter {
  partialTotal: number
  resetCart: () => void
}

export function CartAbstractFooter({
  partialTotal,
  resetCart,
}: ICartAbstractFooter) {
  const deliveryTax = 3.5
  const total = partialTotal + deliveryTax
  return (
    <CartAbstractFooterContainer>
      <div className="footer_line_container">
        <div className="footer_line">
          <p> Total de itens </p>
          <p>
            {' '}
            R${' '}
            {String(partialTotal.toFixed(2))
              .replace('.', ',')
              .padEnd(4, '0')}{' '}
          </p>
        </div>
        <div className="footer_line">
          <p> Entrega </p>
          <p>
            {' '}
            R$ {String(deliveryTax.toFixed(2))
              .replace('.', ',')
              .padEnd(4, '0')}{' '}
          </p>
        </div>
        <div className="footer_last_line">
          <p> Total </p>
          <p>
            {partialTotal > 0
              ? `R$ ${String(total.toFixed(2))
                  .replace('.', ',')
                  .padEnd(4, '0')}`
              : '--'}
          </p>
        </div>
      </div>

      <Link to="/confirmation">
        <button className="confirmation_btn" onClick={resetCart}>
          CONFIRMAR PEDIDO
        </button>
      </Link>
    </CartAbstractFooterContainer>
  )
}
