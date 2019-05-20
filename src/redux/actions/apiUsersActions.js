import { FETCH_API_USERS } from './actionTypes'
import { DELETE_USER } from './actionTypes'

import axios from 'axios'

const apiURL = "https://jsonplaceholder.typicode.com/users";

export function fetchApiUsers(){
    return(dispatch) => {
        return axios.get(apiURL)
        .then((response) => {
            console.log(response)
            dispatch({
                type: FETCH_API_USERS,
                payload: response.data // dispatches the type and the payload which is the data from api to the reducer eg apiUsersReducer 
            })
            console.log(response.data)
        })
    }
}

export function deleteUser(){
    return(dispatch) => {
        return axios.get(apiURL)
        .then((response) => {
            dispatch({
                type: DELETE_USER,
                payload: response.data
            })
        })
    }
}