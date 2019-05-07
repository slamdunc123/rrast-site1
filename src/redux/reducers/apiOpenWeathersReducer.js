import { FETCH_API_OPENWEATHERS } from '../actions/actionTypes'

const initState = {
    apiopenweathers: []
}

const apiOpenWeathersReducer = (state = initState, action) => {
    switch(action.type){
        case FETCH_API_OPENWEATHERS:
            return {
                ...state,
                apiopenweathers: action.payload
            }
            default:
                return state
    }
}

export default apiOpenWeathersReducer