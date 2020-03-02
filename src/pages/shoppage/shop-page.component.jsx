// Libraries....
import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/shop/shop.selectors'; 

// Components...
import PreviewCollection from '../../components/preview-collection/preview-collection.component';

const ShopPage = ({collections}) => {
    return (
        <div className="preview">
            {collections.map(({id, ...otherCollectionProps}) => (
                <PreviewCollection key={id} { ...otherCollectionProps}></PreviewCollection>
            ))}
        </div>
    )       
}

const mapStateToProps = createStructuredSelector ({
    collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);