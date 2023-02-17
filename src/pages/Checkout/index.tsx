import React from 'react'
import { AddressFormHeaderComponent } from '../../components/AddressForm/Header'
import { AddressFormInputs } from '../../components/AddressForm/View'
import { CartAbstract } from '../../components/CartAbstract'
import { PaymentType } from '../../components/PaymentType'
import { CheckoutContainer } from './styles'

export default function Checkout() {
  return (
    <CheckoutContainer>
      <div className="payment_and_delivery">
        <AddressFormHeaderComponent />
        <AddressFormInputs />
        <PaymentType />
      </div>
      <div className="cart_abstract">
        <CartAbstract />
      </div>
    </CheckoutContainer>
  )
}
