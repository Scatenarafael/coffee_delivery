import { Minus, Plus } from 'phosphor-react'
import React from 'react'
import { BtnContainer } from './styles'

interface IQuantityControlBtnProps {
  quantity?: number
  entity?: 'card' | 'abstract'
  increaseMainItemQuantity?: () => void
  decreaseMainItemQuantity?: () => void
  increaseCartItemQuantity?: () => void
  decreaseCartItemQuantity?: () => void
}

export default function QuantityControlBtn({
  quantity = 1,
  entity = 'card',
  increaseMainItemQuantity,
  decreaseMainItemQuantity,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
}: IQuantityControlBtnProps) {
  return (
    <BtnContainer entity={entity}>
      <button
        onClick={() => {
          entity === 'card'
            ? decreaseMainItemQuantity && decreaseMainItemQuantity()
            : decreaseCartItemQuantity && decreaseCartItemQuantity()
        }}
      >
        <Minus size={entity === 'card' ? 20 : 14} />
      </button>
      <div>{quantity}</div>
      <button
        onClick={() => {
          entity === 'card'
            ? increaseMainItemQuantity && increaseMainItemQuantity()
            : increaseCartItemQuantity && increaseCartItemQuantity()
        }}
      >
        <Plus size={entity === 'card' ? 20 : 14} />
      </button>
    </BtnContainer>
  )
}
