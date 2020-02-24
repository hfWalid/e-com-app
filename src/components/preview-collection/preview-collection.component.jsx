// Libraries....
import React from 'react';

// Components...
import CollectionItem from '../collection-item/collection-item.component';

// Stylesheet...
import './preview-collection.styles.scss';

const PreviewCollection = ({title, items}) => {
    return(
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items.filter((key, idx) => idx < 4)
                .map(({id, ...otherItemProps}) => (
                <CollectionItem key={id}{...otherItemProps}/>)
                )}
            </div>
        </div>
    );
};

export default PreviewCollection;