// Libraries....
import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

 import {selectCartItems} from '../../redux/cart/cart.selectors';
 import {toggleCartHidden} from '../../redux/cart/cart.actions';

// Components...
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';


// Stylesheet...
import './cart-dropdown.styles.scss';
import { createStructuredSelector } from 'reselect';

const CartDropdown = ({cartItems, history, dispatch}) => {     
    return(
        <div className='cart-dropdown scrollbar scrollbar-primary'>
            <div className='cart-items scrollbar scrollbar-primary'>
                {
                cartItems.length ?
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                )) : (
                    <span className='empty-message'>Your cart is empty</span>
                )
                }
            </div>
            <CustomButton onClick={
                () => {
                    history.push('/checkout');
                    dispatch(toggleCartHidden());
                }
            }>CHECKOUT</CustomButton>
        </div>      
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropdown));