import { IAddressData, ICartItemState, IPaymentType } from './reducer'

export enum ActionTypes {
  RESET_CART = 'RESET_CART_ITEMS',
  CART_ADD_ITEM = 'ADD_ITEM_TO_CART',
  CART_INCREASE_QUANTITY_ITEM = 'INCREASE_QUANTITY_ITEM_OF_CART',
  CART_REMOVE_ITEM = 'REMOVE_ITEM_FROM_CART',
  CART_DECREASE_QUANTITY_ITEM = 'DECREASE_QUANTITY_ITEM_OF_CART',
  MAIN_INCREASE_QUANTITY_ITEM = 'INCREASE_QUANTITY_ITEM_OF_MAIN',
  MAIN_DECREASE_QUANTITY_ITEM = 'DECREASE_QUANTITY_ITEM_OF_MAIN',
  SET_ADDRESS_DATA = 'SET_ADDRESS_DATA',
  SET_PAYMENT_TYPE_DATA = 'SET_PAYMENT_TYPE_DATA',
}

interface IAddNewItemToCartAction {
  itemId: string
  newItem: ICartItemState
}

export function addNewItemToCartAction({
  itemId,
  newItem,
}: IAddNewItemToCartAction) {
  return {
    type: ActionTypes.CART_ADD_ITEM,
    payload: {
      itemId,
      newItem,
    },
  }
}
export function increaseQuantityItemOfCartAction(itemId: string) {
  return {
    type: ActionTypes.CART_INCREASE_QUANTITY_ITEM,
    payload: {
      itemId,
    },
  }
}
export function decreaseQuantityItemOfCartAction(itemId: string) {
  return {
    type: ActionTypes.CART_DECREASE_QUANTITY_ITEM,
    payload: {
      itemId,
    },
  }
}
export function removeItemFromCartAction(itemId: string) {
  return {
    type: ActionTypes.CART_REMOVE_ITEM,
    payload: {
      itemId,
    },
  }
}

export function increaseQuantityItemOfMainAction(itemId: string) {
  return {
    type: ActionTypes.MAIN_INCREASE_QUANTITY_ITEM,
    payload: {
      itemId,
    },
  }
}

export function decreaseQuantityItemOfMainAction(itemId: string) {
  return {
    type: ActionTypes.MAIN_DECREASE_QUANTITY_ITEM,
    payload: {
      itemId,
    },
  }
}
export function resetCartAction() {
  return {
    type: ActionTypes.RESET_CART,
    payload: {
      itemId: '',
    },
  }
}
export function setAddressDataAction(addressData: IAddressData) {
  return {
    type: ActionTypes.SET_ADDRESS_DATA,
    payload: {
      addressData,
    },
  }
}
export function setPaymentTypeAction(paymentTypeData: IPaymentType) {
  return {
    type: ActionTypes.SET_PAYMENT_TYPE_DATA,
    payload: {
      paymentTypeData,
    },
  }
}
