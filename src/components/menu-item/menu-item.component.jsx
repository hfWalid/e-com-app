// Libraries......
import React from 'react';
import { withRouter } from 'react-router-dom';

// Components.....

// Stylesheet.....
import '../menu-item/menu-item.styles.scss';

//
const MenuItem = ({id, title, size, imageUrl, history, linkUrl, match}) => (
    <div className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}>
        </div>
        <div className='content'>
            <h1 className='title' key={id}>{title.toUpperCase()}</h1>
            <span className='subtitle'>Shop Now</span>
        </div>
    </div>
);

export default withRouter(MenuItem);