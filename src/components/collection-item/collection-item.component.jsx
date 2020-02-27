// Libraries....
import React from 'react';

// Components...
import CustomButton from '../custom-button/custom-button.component';


// Stylesheet...
import './collection-item.styles.scss'

const CollectionItem = (props) => {
    return(
        <div className='collection-item' key={props.id}>
            <div
                className='image'
                style={{
                    backgroundImage:`url(${props.imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{props.name}</span>
                <span className='price'>{props.price}</span>
            </div>
            <CustomButton inverted>
                Add to cart
            </CustomButton>
        </div>
    );
}

export default CollectionItem;