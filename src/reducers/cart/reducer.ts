import { ICoffeeCardData } from '../../data/@types'
import { ActionTypes } from './actions'

export interface Item {
  id: string
  name: string
  description: string
  price: number
  coffeTags: string[]
}

export interface ICartItemState {
  item: Item
  quantity: number
}

export interface ICartState {
  cartItems: ICartItemState[]
  mainItems: ICoffeeCardData[]
}

export function cartReducer(state: ICartState, action: any) {
  const filteredCartItems = state.cartItems.filter((item) => {
    return item.item.id !== action.payload.itemId
  })

  const changedCartItem = state.cartItems.find((item) => {
    return item.item.id === action.payload.itemId
  })
  const filteredMainItems = state.mainItems.filter((item) => {
    return item.id !== action.payload.itemId
  })
  const changedMainItem = state.mainItems.find((item) => {
    return item.id === action.payload.itemId
  })

  const increasedCartItems = changedCartItem
    ? [
        ...filteredCartItems,
        {
          item: { ...changedCartItem?.item },
          quantity: changedCartItem?.quantity + 1,
        },
      ]
    : []

  const decreasedCartItems = changedCartItem
    ? [
        ...filteredCartItems,
        {
          item: { ...changedCartItem?.item },
          quantity:
            changedCartItem.quantity > 1 ? changedCartItem.quantity - 1 : 1,
        },
      ]
    : []

  const increasedMainItems = changedMainItem
    ? [
        ...filteredMainItems,
        {
          ...changedMainItem,
          quantity: changedMainItem?.quantity + 1,
        },
      ]
    : []

  const decreasedMainItems = changedMainItem
    ? [
        ...filteredMainItems,
        {
          ...changedMainItem,
          quantity:
            changedMainItem.quantity > 1 ? changedMainItem.quantity - 1 : 1,
        },
      ]
    : []

  const resetedMainItems = changedMainItem
    ? [
        ...filteredMainItems,
        {
          ...changedMainItem,
          quantity: 1,
        },
      ]
    : []

  const findItemInCart = state.cartItems.find((item) => {
    return item.item.id === action.payload.itemId
  })

  const alreadyHasItemInCart = !!findItemInCart

  const insertItemToCart =
    alreadyHasItemInCart && changedCartItem && changedMainItem
      ? [
          ...filteredCartItems,
          {
            ...changedCartItem,
            quantity: changedCartItem?.quantity + changedMainItem?.quantity,
          },
        ]
      : [...state.cartItems, action.payload.newItem]

  switch (action.type) {
    case ActionTypes.RESET_CART:
      return {
        ...state,
        cartItems: [],
      }
    case ActionTypes.CART_ADD_ITEM:
      return {
        ...state,
        mainItems: resetedMainItems,
        cartItems: insertItemToCart,
      }
    case ActionTypes.CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: filteredCartItems,
      }
    case ActionTypes.CART_INCREASE_QUANTITY_ITEM:
      return {
        ...state,
        cartItems: increasedCartItems,
      }
    case ActionTypes.CART_DECREASE_QUANTITY_ITEM:
      return {
        ...state,
        cartItems: decreasedCartItems,
      }
    case ActionTypes.MAIN_INCREASE_QUANTITY_ITEM:
      return {
        ...state,
        mainItems: increasedMainItems,
      }
    case ActionTypes.MAIN_DECREASE_QUANTITY_ITEM:
      return {
        ...state,
        mainItems: decreasedMainItems,
      }
    default:
      return state
  }
}
