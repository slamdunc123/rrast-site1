import { FETCH_API_BOOTSWATCHES } from './actionTypes';

import axios from 'axios'

const apiURL = "https://bootswatch.com/api/4.json";

export function fetchApiBootswatches(){
    return(dispatch) => {
        return axios.get(apiURL)
        .then((response) => {
            dispatch({
                type: FETCH_API_BOOTSWATCHES,
                payload: response.data.themes
            })
        })
    }
}