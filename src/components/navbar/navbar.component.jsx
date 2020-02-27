// Libraries.....
import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../Firebase/firebase.utils';
import {connect} from 'react-redux';

// Components....
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


// Stylesheet....
import 'bootstrap/dist/css/bootstrap.min.css';


const Navigbar = ({currentUser, hidden}) => {
    return(
      <div className="navigbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed">
          <Link to='/' className="navbar-brand">HOME</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link to='/shop' className="nav-item nav-link">SHOP</Link>
            <Link to='/about' className="nav-item nav-link">ABOUT</Link>
          </div>
          <div className='navbar-nav'>
            {currentUser ? (
              <Link className='nav-item nav-link' onClick={() => auth.signOut()} to='/' >SIGN OUT</Link>
                ) : (
              <Link className='nav-item nav-link' to='/signinup'>SIGN IN</Link>
            )}
          <CartIcon/>
          </div>
        </nav>
        {hidden ? null : <CartDropdown/>}
      </div>
    )
}

// It provides some specific detat to the store
const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Navigbar);