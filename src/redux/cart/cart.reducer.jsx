import {cartActionsTypes} from './cart.types';
import {addItemToCart} from './cart.utils';
import { deleteItemFromCart } from './cart.utils';

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
        default:
            return state;
    }

}

export default cartReducer;