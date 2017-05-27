import axios from 'axios';

const API_KEY = 'be0cd50d6be3ff83bc980ca4e91404cf'; // Put your API key here
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    //console.log(url);

    const request = axios.get(url);

    //console.log('Request:', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}