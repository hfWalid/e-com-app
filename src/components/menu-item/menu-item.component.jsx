// Libraries......
import React from 'react';

// Components.....

// Stylesheet.....
import '../menu-item/menu-item.styles.scss';

//
const MenuItem = ({id, title, size, imageUrl}) => (
    <div className={`${size} menu-item`}>
        <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}>
        </div>
        <div className='content'>
            <h1 className='title' key={id}>{title}</h1>
            <span className='subtitle'>Shop Now</span>
        </div>
    </div>
);

export default MenuItem;