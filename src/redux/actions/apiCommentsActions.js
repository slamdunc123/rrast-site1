import { FETCH_API_COMMENTS } from './actionTypes'

import axios from 'axios'

const apiURL = "https://jsonplaceholder.typicode.com/comments";

export function fetchApiComments(){
    return(dispatch) => {
        return axios.get(apiURL)
        .then((response) => {
            dispatch({
                type: FETCH_API_COMMENTS,
                payload: response.data
            })
        })
    }
}