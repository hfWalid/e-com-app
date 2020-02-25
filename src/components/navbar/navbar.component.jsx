// Libraries.....
import React from 'react';
import {Link} from 'react-router-dom';

// Components....


// Stylesheet....
import 'bootstrap/dist/css/bootstrap.min.css';


const Navigbar = () => {
    return(
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to='/' className="navbar-brand">Home</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to='/shop' className="nav-link">Shop</Link>
                </li>
                <li className="nav-item">
                  <Link to='/signinup' className="nav-link">SignIn</Link>
                </li>
                <div className='navbar-nav'>
                  <li className="nav-item">
                    <Link to='/contact' className="nav-link">Contact-Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/about' className="nav-link">About</Link>
                  </li>
                </div>  
              </ul>
            </div>
          </nav>
        </div>
    )
}

export default Navigbar;