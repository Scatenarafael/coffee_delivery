import React from 'react'
import { CardCart } from '../CardCart'
import QuantityControlBtn from '../../QuantityControlBtn'
import { FooterContainer } from './styles'

interface IFooterCardProps {
  price: number
  quantity: number
  addItemToCart: () => void
  increaseMainItemQuantity: () => void
  decreaseMainItemQuantity: () => void
}

export function FooterCard({
  price,
  quantity,
  addItemToCart,
  increaseMainItemQuantity,
  decreaseMainItemQuantity,
}: IFooterCardProps) {
  return (
    <FooterContainer>
      <span className="priceContainer">
        R${' '}
        <p className="priceValue">
          {String(price).replace('.', ',').padEnd(4, '0')}
        </p>
      </span>
      <div className="cartBtnsContainer">
        <QuantityControlBtn
          quantity={quantity}
          increaseMainItemQuantity={increaseMainItemQuantity}
          decreaseMainItemQuantity={decreaseMainItemQuantity}
        />
        <CardCart addItemToCart={addItemToCart} />
      </div>
    </FooterContainer>
  )
}
