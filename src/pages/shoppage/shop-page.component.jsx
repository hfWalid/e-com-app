// Libraries....
import React from 'react';

// Components...
import PreviewCollection from '../../components/preview-collection/preview-collection.component';

// Data-Source..
import DATA_SHOP from './DATA_SHOP.data';

class ShopPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            collections : DATA_SHOP
        }
    }

    render(){
        const {collections} = this.state;
        return (
            <div className="preview">
                {collections.map(({id, ...otherCollectionProps}) => (
                    <PreviewCollection key={id} { ...otherCollectionProps}></PreviewCollection>
                ))}
            </div>
        )
    }
}

export default ShopPage;