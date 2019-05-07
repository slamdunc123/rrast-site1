// redux imports
import { combineReducers } from 'redux'

//  created reducers
import usersReducer from './usersReducer'
import postsReducer from './postsReducer'
import apiPostsReducer from './apiPostsReducer'
import apiUsersReducer from './apiUsersReducer'
import apiCommentsReducer from './apiCommentsReducer'
import apiTodosReducer from './apiTodosReducer'
import apiBootswatchesReducer from './apiBootswatchesReducer'
import apiOpenWeathersReducer from './apiOpenWeathersReducer'

const rootReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    apiposts: apiPostsReducer,
    apiusers: apiUsersReducer,
    apicomments: apiCommentsReducer,
    apitodos: apiTodosReducer,
    apibootswatches: apiBootswatchesReducer,
    apiopenweathers: apiOpenWeathersReducer
})

export default rootReducer;