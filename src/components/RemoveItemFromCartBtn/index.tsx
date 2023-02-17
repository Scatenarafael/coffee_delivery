import { Trash } from 'phosphor-react'
import React from 'react'
import { RemoveItemBtnContainer } from './styles'

interface IRemoveItemFromCartBtnProps {
  removeItemFromCart: () => void
}

export function RemoveItemFromCartBtn({
  removeItemFromCart,
}: IRemoveItemFromCartBtnProps) {
  return (
    <RemoveItemBtnContainer onClick={removeItemFromCart}>
      <Trash size={14} />
      <p>REMOVER</p>
    </RemoveItemBtnContainer>
  )
}
