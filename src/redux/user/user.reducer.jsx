const intiState = {
    currenUser : null
}

const userReducer = (state = intiState, action) => {
    switch(action.type){
        case 'SET_Current_USER':
            return{
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;