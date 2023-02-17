import { ShoppingCartSimple } from 'phosphor-react'
import { CardCartContainer } from './styles'

interface ICardCart {
  addItemToCart: () => void
}

export function CardCart({ addItemToCart }: ICardCart) {
  return (
    <CardCartContainer
      onClick={() => {
        addItemToCart()
      }}
    >
      <ShoppingCartSimple size={25} />
    </CardCartContainer>
  )
}
