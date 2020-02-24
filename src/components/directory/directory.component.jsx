// Libraries......
import React from 'react';

// Data sources...
import COLLECTIONS_DATA from './collections.data';

// Components.....
import MenuItem from '../menu-item/menu-item.component';

// Stylesheet.....
import '../directory/directory.styles.scss';


class Directory extends React.Component{
    constructor () {
        super();
        
        this.state = {sections : COLLECTIONS_DATA}
    }

    render(){
        return (
            <div className='directory-menu'>
                {this.state.sections.map( 
                    ({id, ...otherSectionProps}) => ( 
                    <MenuItem key={id} {...otherSectionProps}/> )
                )}
            </div>
        )
    }
}

export default Directory;