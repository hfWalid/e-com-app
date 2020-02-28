import {cartActionsTypes} from './cart.types';

export const toggleCartHidden = () => ({
    type: cartActionsTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
    type: cartActionsTypes.ADD_ITEM,
    payload: item
})

export const deleteItem = id => ({
    type: cartActionsTypes.DELETE_ITEM,
    id: id
})

export const increaseItem = id => ({
    type: cartActionsTypes.INC_ITEM,
    id: id
})

export const decreaseItem = id => ({
    type: cartActionsTypes.DEC_ITEM,
    id: id
})