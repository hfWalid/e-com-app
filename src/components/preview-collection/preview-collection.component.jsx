// Libraries....
import React from 'react';

// Components...


// Stylesheet...
import './preview-collection.styles.scss';

const PreviewCollection = ({title, items}) => {
    return(
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items.filter((key, idx) => idx < 4)
                .map(item => (
                <div key={item.id}>{item.name}</div>)
                )}
            </div>
        </div>
    );
};

export default PreviewCollection;