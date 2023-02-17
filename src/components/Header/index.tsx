import { MapPin, ShoppingCart } from 'phosphor-react'
import React, { useContext } from 'react'
import {
  CartBtn,
  HeaderBadge,
  HeaderCartBadgeTagContainer,
  HeaderContainer,
} from './styles'

import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { state } = useContext(CartContext)
  return (
    <HeaderContainer>
      <Link to="/">
        <img
          src="/src/assets/coffee_delivery_logo.svg"
          alt="CoffeeDeliveryLogo"
        />
      </Link>
      <HeaderCartBadgeTagContainer>
        <HeaderBadge>
          <MapPin size={25} />
          <p>Porto Alegre, RS</p>
        </HeaderBadge>
        <Link to="/checkout">
          <CartBtn>
            <ShoppingCart size={20} />
            {state.cartItems.length > 0 && (
              <div className="_number_of_items_in_cart">
                {state.cartItems.length}
              </div>
            )}
          </CartBtn>
        </Link>
      </HeaderCartBadgeTagContainer>
    </HeaderContainer>
  )
}
