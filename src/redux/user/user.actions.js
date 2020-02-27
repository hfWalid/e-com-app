import { userActionsTypes } from './user.types'; 

const setCurrentUser = user => ({
    type:userActionsTypes.SET_CURRENT_USER,
    payload: user
})

export default setCurrentUser;