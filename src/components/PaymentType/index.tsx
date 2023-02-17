import React from 'react'
import { PaymentTypeHeader } from './Header'
import { PaymentTypeBody } from './PaymentTypeBody'
import { PaymentContainer } from './styles'

export function PaymentType() {
  return (
    <PaymentContainer>
      <PaymentTypeHeader />
      <PaymentTypeBody />
    </PaymentContainer>
  )
}
