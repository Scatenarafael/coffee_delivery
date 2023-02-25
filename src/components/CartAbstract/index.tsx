import React, { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import {
  resetCartAction,
  setAddressDataAction,
} from '../../reducers/cart/actions'
// import { resetCartAction } from '../../reducers/cart/actions'
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

  const { watch, reset } = useFormContext()

  const cep = watch('cep')
  const city = watch('city')
  const complement = watch('complement')
  const district = watch('district')
  const n = watch('n')
  const stateWatched = watch('state')
  const street = watch('street')

  const cepOnlyNumbers = cep.replace(/([^0-9])/, '')

  function resetCart() {
    const addressData = {
      cep: cepOnlyNumbers,
      city,
      complement,
      district,
      n,
      state: stateWatched,
      street,
    }
    console.log('resetCart >>> addressData', addressData)
    dispatch(setAddressDataAction(addressData))
    dispatch(resetCartAction())
    reset()
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
