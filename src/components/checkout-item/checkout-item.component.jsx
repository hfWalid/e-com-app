import React from 'react';
import {connect} from 'react-redux';

import {deleteItem} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem: { id, name, imageUrl, price, quantity }, deleteItem }) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>
        <div className="arrow"> &#10094;</div>
            {quantity}
        <div className="arrow"> &#10095;</div>
    </span>
    <span className='price'>{price}</span>
    <div className='remove-button' onClick={() => deleteItem(id)} >&#10005;</div>
  </div>
);

const mapDispatchToProps = dispatch => ({
    deleteItem: item => dispatch(deleteItem(item))
  });
  
  export default connect(null, mapDispatchToProps)(CheckoutItem);