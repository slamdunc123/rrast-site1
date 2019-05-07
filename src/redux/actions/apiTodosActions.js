import { FETCH_API_TODOS } from './actionTypes'

import axios from 'axios'

const apiURL = "https://jsonplaceholder.typicode.com/todos";

export function fetchApiTodos(){
    return(dispatch) => {
        return axios.get(apiURL)
        .then((response) => {
            dispatch({
                type: FETCH_API_TODOS,
                payload: response.data
            })
        })
    }
}