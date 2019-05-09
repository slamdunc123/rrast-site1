import { FETCH_API_OPENWEATHERS } from './actionTypes';

import axios from 'axios'

const cityId = '524901';

const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=" + cityId + "&APPID=9e3b41b556d2b7085e43777a1f5d5923";

export function fetchApiOpenWeathers(){
    return(dispatch) => {
        return axios.get(apiURL)
        .then((response) => {
            console.log(response.data.list);
            dispatch({
                type: FETCH_API_OPENWEATHERS,
                payload: response.data.list
            })
        })
    }
}