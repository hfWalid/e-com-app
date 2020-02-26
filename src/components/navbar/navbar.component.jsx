// Libraries.....
import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../Firebase/firebase.utils';
import {connect} from 'react-redux';

// Components....


// Stylesheet....
import 'bootstrap/dist/css/bootstrap.min.css';


const Navigbar = ({currentUser}) => {
    return(
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light fixed">
            <Link to='/' className="navbar-brand">HOME</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to='/shop' className="nav-link">SHOP</Link>
                </li>
                <li className="nav-item">
                {currentUser ? (
                    <Link className='nav-link' onClick={() => auth.signOut()} to='/' >SIGN OUT</Link>
                    ) : (
                    <Link className='nav-link' to='/signinup'>SIGN IN</Link>
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

// It maps specific data from the real state to the component's props
const mapStateToProps = ({user:{currentUser}}) => ({
  currentUser : currentUser
})

export default connect(mapStateToProps)(Navigbar);