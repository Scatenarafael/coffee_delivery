export interface IAddressFormProps {
  CEP: string
  street: string
  n: number
  complement: string
  city: string
  district: string
  state: string
}

export const maskCEP = (value: string) => {
  return value.replace(/\D/g, '').replace(/^(\d{5})(\d{3})+?$/, '$1-$2')
}
