import { FETCH_API_TODOS } from '../actions/actionTypes'

const initState = {
    apitodos: []
}

const apiTodosReducer = (state = initState, action) => {
    switch(action.type){
        case FETCH_API_TODOS:
            return {
                ...state,
                apitodos: action.payload
            }
            default:
                return state
    }
}

export default apiTodosReducer