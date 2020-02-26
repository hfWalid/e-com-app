import { userActionsTypes } from './user.types'; 

const INITIAL_STATE = {
    currentUser : null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case userActionsTypes.SET_Current_USER :
            return{
                ...state,
                currentUser: action.payload.userAuth
            }
        default:
            return state;
    }
}

export default userReducer;