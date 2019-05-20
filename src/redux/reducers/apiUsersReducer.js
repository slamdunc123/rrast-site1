import { FETCH_API_USERS } from '../actions/actionTypes'
import { DELETE_USER } from '../actions/actionTypes'

const initState = {
    apiusers: []
}

const apiUsersReducer = (state = initState, action) => {
    console.log(action);
    switch(action.type){
        case FETCH_API_USERS: // checks the type from apiUsersActions
        console.log(action)
            return {
                ...state,
                apiusers: action.payload // imports the payload from apiUsersActions
            };
        
        case DELETE_USER:
            return state.filter((item) => item.id !== action.id);
        
        default:
            return state
    }
}

export default apiUsersReducer