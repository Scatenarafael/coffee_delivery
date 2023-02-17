import React, { useContext } from 'react'
import { CoffeeListGrid } from '../../components/CoffeeListGrid'
import { CartContext } from '../../contexts/CartContext'
import { HomeIntroContainer, HomeSubtitle } from './styles'

export default function Home() {
  const { state } = useContext(CartContext)
  function compare(a: any, b: any) {
    if (a.name < b.name) {
      return -1
    }
    if (a.name > b.name) {
      return 1
    }
    return 0
  }
  return (
    <div>
      <HomeIntroContainer>
        <div className="left_container">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div className="grid_component">
            <div>
              <img src="/src/assets/cart_icon.svg" alt="icone do carrinho" />
              <p>Compra simples e segura</p>
            </div>
            <div>
              <img src="/src/assets/package_icon.svg" alt="icone de pacote" />
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div>
              <img src="/src/assets/clock_icon.svg" alt="icone relogio" />
              <p>Entrega rápida e rastreada</p>
            </div>
            <div>
              <img src="/src/assets/coffee_icon.svg" alt="icone cafe" />
              <p>O café chega fresquinho até você</p>
            </div>
          </div>
        </div>
        <img src="/src/assets/main_coffee.png" className="right_image" />
      </HomeIntroContainer>
      <HomeSubtitle>Nossos Cafés</HomeSubtitle>
      <CoffeeListGrid data={state.mainItems.sort(compare)} />
    </div>
  )
}
