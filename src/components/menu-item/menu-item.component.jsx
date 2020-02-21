// Libraries......
import React from 'react';

// Components.....

// Stylesheet.....
import '../menu-item/menu-item.styles.scss';


const MenuItem = ({id, title, imageUrl}) => (
    <div className='menu-item'>
        <div className='content'>
            <h1 className='title' key={id}>{title}</h1>
            
            <span className='subtitle'>Shop Now</span>
        </div>
    </div>
);

export default MenuItem;