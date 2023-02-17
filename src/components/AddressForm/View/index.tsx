import React from 'react'
import {
  AddressFormInputsContainer,
  CEPInput,
  CityInput,
  ComplementInput,
  DistrictInput,
  NInput,
  StateInput,
  StreetInput,
} from './styles'

export function AddressFormInputs() {
  return (
    <AddressFormInputsContainer>
      <CEPInput placeholder="CEP" />
      <StreetInput placeholder="Rua" />
      <NInput placeholder="Número" />
      <ComplementInput placeholder="Complemento" />
      <DistrictInput placeholder="Bairro" />
      <CityInput placeholder="Cidade" />
      <StateInput placeholder="UF" />
    </AddressFormInputsContainer>
  )
}
