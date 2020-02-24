// Libraries.....
import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'; 

// Components....



const Navigbar = () => {
    return(
        <Navbar>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </Navbar>
    )
}

export default Navigbar;