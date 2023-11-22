import axios from 'axios';

const api_access_key = "e937cb07e9e054643172e1bb2f510014";//Your API Access Key

export const weatherReport = (city) =>{
    let response = axios.get(`http://api.weatherstack.com/current?access_key=${api_access_key}&query=${city}`)
    return response
}

export const weatherLiveLocation = (lat,lon) =>{
    let response = axios.get(`http://api.weatherstack.com/current?access_key=${api_access_key}&query=${lat},${lon}`)
    return response
}
