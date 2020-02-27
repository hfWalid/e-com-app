// Libraries....
import React from 'react';

// Components...
import CustomButton from '../custom-button/custom-button.component';


// Stylesheet...
import './cart-dropdown.styles.scss';

class CartDropdown extends React.Component {
    render(){
        return(
            <div className='cart-dropdown'>
                <div className='cart-items'/>
                <CustomButton>CHECKOUT</CustomButton>
            </div>
        )
    }
}

export default CartDropdown;