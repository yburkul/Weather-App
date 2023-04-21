import axios from 'axios';

export const weatherReport = (city) =>{
    let response = axios.get(`http://api.weatherstack.com/current?access_key=5c379c53598af63a1a5a23b618a76d9e&query=${city}`)
    return response
}

export const weatherLiveLocation = (lat,lon) =>{
    let response = axios.get(`http://api.weatherstack.com/current?access_key=5c379c53598af63a1a5a23b618a76d9e&query=${lat},${lon}`)
    return response
}
