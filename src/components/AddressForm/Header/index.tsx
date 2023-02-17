import { MapPinLine } from 'phosphor-react'
import React from 'react'
import { AddressFormHeader, AddressFormTitle } from './styles'

export function AddressFormHeaderComponent() {
  return (
    <>
      <AddressFormTitle>Complete seu pedido</AddressFormTitle>
      <AddressFormHeader>
        <MapPinLine size={20} />
        <div>
          <p>Endereço de Entrega</p>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </AddressFormHeader>
    </>
  )
}
