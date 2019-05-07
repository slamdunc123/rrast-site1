import { FETCH_API_COMMENTS } from '../actions/actionTypes'

const initState = {
    apicomments: []
}

const apiCommentsReducer = (state = initState, action) => {
    switch(action.type){
        case FETCH_API_COMMENTS:
            return {
                ...state,
                apicomments: action.payload
            }
            default:
                return state
    }
}

export default apiCommentsReducer