import { Bank, CreditCard, Money } from 'phosphor-react'
import React, { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import { setPaymentTypeAction } from '../../../reducers/cart/actions'
import { IPaymentType } from '../../../reducers/cart/reducer'
import { PaymentTypeBodyContainer } from './styles'

export function PaymentTypeBody() {
  const { state, dispatch } = useContext(CartContext)

  function setPaymentMethod(paymentTypeData: IPaymentType) {
    dispatch(setPaymentTypeAction(paymentTypeData))
  }
  return (
    <PaymentTypeBodyContainer>
      <button
        onClick={() => {
          setPaymentMethod('credit_card')
        }}
        className={state.paymentType === 'credit_card' ? 'active' : ''}
      >
        <CreditCard size={16} />
        <span>CARTÃO DE CRÉDITO</span>
      </button>
      <button
        onClick={() => {
          setPaymentMethod('debit_card')
        }}
        className={state.paymentType === 'debit_card' ? 'active' : ''}
      >
        <Bank size={16} />
        <span>CARTÃO DE DÉBITO</span>
      </button>
      <button
        onClick={() => {
          setPaymentMethod('cash')
        }}
        className={state.paymentType === 'cash' ? 'active' : ''}
      >
        <Money size={16} />
        <span>DINHEIRO</span>
      </button>
    </PaymentTypeBodyContainer>
  )
}
