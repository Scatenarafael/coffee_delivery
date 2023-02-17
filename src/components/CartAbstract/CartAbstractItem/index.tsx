import React, { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import {
  decreaseQuantityItemOfCartAction,
  increaseQuantityItemOfCartAction,
  removeItemFromCartAction,
} from '../../../reducers/cart/actions'
import { ICartItemState } from '../../../reducers/cart/reducer'
import QuantityControlBtn from '../../QuantityControlBtn'
import { RemoveItemFromCartBtn } from '../../RemoveItemFromCartBtn'
import { CartAbstractItemContainer } from './styles'

interface ICartAbstractItemProps {
  item: ICartItemState
}

export function CartAbstractItem({ item }: ICartAbstractItemProps) {
  const { dispatch } = useContext(CartContext)

  function increaseCartItemQuantity() {
    dispatch(increaseQuantityItemOfCartAction(item.item.id))
  }
  function decreaseCartItemQuantity() {
    dispatch(decreaseQuantityItemOfCartAction(item.item.id))
  }

  function removeItemFromCart() {
    dispatch(removeItemFromCartAction(item.item.id))
  }
  const subTotal = item.item.price * item.quantity
  return (
    <CartAbstractItemContainer>
      <img src={`/src/assets/coffees/Type=${item.item.name}.svg`} />
      <div className="cart_item_details">
        <div className="cart_item_header">
          <p>{item.item.name}</p>
          <div>
            <p className="_pricexquantity">
              R$ {String(subTotal.toFixed(2)).replace('.', ',').padEnd(4, '0')}
            </p>
            <p>
              R${' '}
              {String(item.item.price.toFixed(2))
                .replace('.', ',')
                .padEnd(4, '0')}{' '}
              x {item.quantity}
            </p>
          </div>
        </div>
        <div className="cart_item_btns">
          <QuantityControlBtn
            increaseCartItemQuantity={increaseCartItemQuantity}
            decreaseCartItemQuantity={decreaseCartItemQuantity}
            quantity={item.quantity}
            entity="abstract"
          />
          <RemoveItemFromCartBtn removeItemFromCart={removeItemFromCart} />
        </div>
      </div>
    </CartAbstractItemContainer>
  )
}
