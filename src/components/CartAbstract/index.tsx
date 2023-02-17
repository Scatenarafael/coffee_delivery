import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { resetCartAction } from '../../reducers/cart/actions'
import { CartAbstractBody } from './CartAbstractBody'
import { CartAbstractFooter } from './CartAbstractFooter'
import {
  CartAbstractContainer,
  CartAbstractTitle,
  RightSideofCheckoutPage,
} from './styles'

export function CartAbstract() {
  const { state, dispatch } = useContext(CartContext)

  const navigate = useNavigate()

  function compareCart(a: any, b: any) {
    if (a.item.name < b.item.name) {
      return -1
    }
    if (a.item.name > b.item.name) {
      return 1
    }
    return 0
  }

  const partialTotal = state.cartItems.reduce((accumulator, partTotal) => {
    return accumulator + partTotal.quantity * partTotal.item.price
  }, 0)

  function resetCart() {
    dispatch(resetCartAction())
    navigate('/confirmation')
  }

  console.log('partialTotal: ', partialTotal)
  return (
    <RightSideofCheckoutPage>
      <CartAbstractTitle className="cart_abstract_title">
        Cafés Selecionados
      </CartAbstractTitle>
      <CartAbstractContainer>
        <CartAbstractBody items={state.cartItems.sort(compareCart)} />
        <CartAbstractFooter partialTotal={partialTotal} resetCart={resetCart} />
      </CartAbstractContainer>
    </RightSideofCheckoutPage>
  )
}
