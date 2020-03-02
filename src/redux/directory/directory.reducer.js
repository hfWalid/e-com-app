// Datat source
import DIRECTORY_DATA from './DIRECTORY_DATA.data';

const INITIAL_STATE = {
  sections: DIRECTORY_DATA
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default directoryReducer;