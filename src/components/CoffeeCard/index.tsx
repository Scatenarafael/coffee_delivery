import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { ICoffeeCardData } from '../../data/@types'
import {
  addNewItemToCartAction,
  decreaseQuantityItemOfMainAction,
  increaseQuantityItemOfMainAction,
} from '../../reducers/cart/actions'
import { BodyCard } from './BodyCard'
import { FooterCard } from './FooterCard'
import { CardContainer } from './styles'
import { TagComponent } from './TagComponent'

export function CoffeeCard({
  id,
  name,
  description,
  coffeTags,
  price,
  quantity,
}: ICoffeeCardData) {
  const { dispatch } = useContext(CartContext)

  function addItemToCart() {
    const newItem = {
      item: {
        id,
        name,
        description,
        coffeTags,
        price,
      },
      quantity,
    }
    dispatch(addNewItemToCartAction({ itemId: newItem.item.id, newItem }))
  }

  function increaseMainItemQuantity() {
    dispatch(increaseQuantityItemOfMainAction(id))
  }
  function decreaseMainItemQuantity() {
    dispatch(decreaseQuantityItemOfMainAction(id))
  }

  return (
    <CardContainer>
      <img src={`/src/assets/coffees/Type=${name}.svg`} alt={`café ${name}`} />
      <TagComponent coffeTags={coffeTags} />
      <BodyCard name={name} description={description} />
      <FooterCard
        price={price}
        quantity={quantity}
        addItemToCart={addItemToCart}
        increaseMainItemQuantity={increaseMainItemQuantity}
        decreaseMainItemQuantity={decreaseMainItemQuantity}
      />
    </CardContainer>
  )
}
