import React from 'react'
import { ICartItemState } from '../../../reducers/cart/reducer'
import { CartAbstractItem } from '../CartAbstractItem'
import { CartAbstractBodyContainer } from './styles'

interface ICartAbstractBodyProps {
  items: ICartItemState[]
}

export function CartAbstractBody({ items = [] }: ICartAbstractBodyProps) {
  return (
    <CartAbstractBodyContainer>
      {items.map((item) => {
        return <CartAbstractItem key={item.item.id} item={item} />
      })}
    </CartAbstractBodyContainer>
  )
}
