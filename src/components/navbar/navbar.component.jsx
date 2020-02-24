// Libraries.....
import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'; 

// Components....



const Navigbar = () => {
    return(
        <Navbar>
            <ul>
                <Link to='/'>Home</Link>
                <br/>
                <Link to='/about'>About</Link>
            </ul>
        </Navbar>
    )
}

export default Navigbar;