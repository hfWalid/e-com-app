import {cartActionsTypes} from './cart.types';
import {addItemToCart} from './cart.utils';

import { deleteItemFromCart } from './cart.utils';
import { increaseItemQuantity} from './cart.utils';
import {decreaseItemQuantity} from './cart.utils';

const INITIAL_STATE = {
    hidden : true,
    cartItems: []
}

const cartReducer = (state= INITIAL_STATE, action) => {
    switch(action.type){
        case cartActionsTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }
        case cartActionsTypes.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case cartActionsTypes.DELETE_ITEM:
            return{
                ...state,
                cartItems: deleteItemFromCart(state.cartItems, action.id)
            }
        case cartActionsTypes.INC_ITEM:
            return{
                ...state,
                cartItems: increaseItemQuantity(state.cartItems, action.payload)
            }
        case cartActionsTypes.DEC_ITEM:
            return{
                ...state,
                cartItems: decreaseItemQuantity(state.cartItems, action.payload)
            }
        default:
            return state;
    }

}

export default cartReducer;