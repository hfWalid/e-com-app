import { userActionsTypes } from './user.types'; 

const setCurrentUser = user => ({
    type:userActionsTypes.SET_Current_USER,
    payload: user
})

export default setCurrentUser;