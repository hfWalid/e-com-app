// Libraries.....
import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../Firebase/firebase.utils';

// Components....


// Stylesheet....
import 'bootstrap/dist/css/bootstrap.min.css';


const Navigbar = ({currentUser}) => {
    return(
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to='/' className="navbar-brand">HOME</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to='/shop' className="nav-link">SHOP</Link>
                </li>
                <li className="nav-item">
                {currentUser ? (
                    <div className='nav-link' onClick={() => auth.signOut()}>
                      SIGN OUT
                    </div>
                    ) : (
                    <Link className='nav-link' to='/signin'>
                      SIGN IN
                    </Link>
                  )}
                </li>
                <div className='navbar-nav'>
                  <li className="nav-item">
                    <Link to='/contact' className="nav-link">CONTACT-US</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/about' className="nav-link">ABOUT</Link>
                  </li>
                </div>  
              </ul>
            </div>
          </nav>
        </div>
    )
}

export default Navigbar;