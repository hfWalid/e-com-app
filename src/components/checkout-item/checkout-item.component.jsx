import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCartItems} from '../../redux/cart/cart.selectors';

import {deleteItem} from '../../redux/cart/cart.actions';
import {increaseItem} from '../../redux/cart/cart.actions';
import {decreaseItem} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, deleteItem, decreaseItem, increaseItem }) => {
    const { id, name, imageUrl, price, quantity } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className="arrow" onClick={() => decreaseItem(id)}> &#10094;</div>
                    {quantity}
                <div className="arrow"onClick={() => increaseItem(id)}> &#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => deleteItem(id)} >&#10005;</div>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
})

const mapDispatchToProps = dispatch => ({
    deleteItem: item => dispatch(deleteItem(item)),
    increaseItem: id => dispatch(increaseItem(id)),
    decreaseItem: id => dispatch(decreaseItem(id))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);