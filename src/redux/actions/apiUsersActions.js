import { FETCH_API_USERS } from './actionTypes'

import axios from 'axios'

const apiURL = "https://jsonplaceholder.typicode.com/users";

export function fetchApiUsers(){
    return(dispatch) => {
        return axios.get(apiURL)
        .then((response) => {
            dispatch({
                type: FETCH_API_USERS,
                payload: response.data
            })
        })
    }
}