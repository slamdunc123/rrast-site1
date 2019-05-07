import { FETCH_API_BOOTSWATCHES } from '../actions/actionTypes'

const initState = {
    apibootswatches: []
}

const apiBootswatchesReducer = (state = initState, action) => {
    switch(action.type){
        case FETCH_API_BOOTSWATCHES:
            return {
                ...state,
                apibootswatches: action.payload
            }
            default:
                return state
    }
}

export default apiBootswatchesReducer