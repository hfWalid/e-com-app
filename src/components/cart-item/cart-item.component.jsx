// Libraries....
import React from 'react';
import {connect} from 'react-redux';

import {deleteItem} from '../../redux/cart/cart.actions';

// Components....

// StyleSheet....
import './cart-item.styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartItem = ({item: {id, name, imageUrl, price, quantity}, deleteItem}) => {
  return (
    <div className='cart-item'>
      <button type="button" className="close" aria-label="Close" onClick={() => deleteItem(id)}>
        <span aria-hidden="true">&times;</span>
      </button>
      <img src={imageUrl} alt='item' />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  deleteItem: item => dispatch(deleteItem(item))
});

export default connect(null, mapDispatchToProps)(CartItem);