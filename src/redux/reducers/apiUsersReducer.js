import { FETCH_API_USERS } from '../actions/actionTypes'

const initState = {
    apiusers: []
}

const apiUsersReducer = (state = initState, action) => {
    switch(action.type){
        case FETCH_API_USERS:
            return {
                ...state,
                apiusers: action.payload
            }
            default:
                return state
    }
}

export default apiUsersReducer