import React from 'react'
import { useFormContext } from 'react-hook-form'
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
  const { watch } = useFormContext()
  const cep = watch('cep')

  const newCEP = cep
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1')

  const { register } = useFormContext()
  return (
    <AddressFormInputsContainer>
      <CEPInput placeholder="CEP" {...register('cep')} value={newCEP} />
      <StreetInput placeholder="Rua" {...register('street')} />
      <NInput placeholder="Número" {...register('n')} />
      <ComplementInput placeholder="Complemento" {...register('complement')} />
      <DistrictInput placeholder="Bairro" {...register('district')} />
      <CityInput placeholder="Cidade" {...register('city')} />
      <StateInput placeholder="UF" {...register('state')} />
    </AddressFormInputsContainer>
  )
}
