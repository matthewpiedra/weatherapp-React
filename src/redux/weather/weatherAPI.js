import axios from 'axios';

const url = `https://api.openweathermap.org/data/2.5`;
const key = process.env.NODE_ENV === "production" ? process.env.REACT_APP_API_KEY : window.env.API_KEY;

async function fetchWeather(city) {
    try {
        const res = await axios.get(`${url}/weather?q=${city}&units=imperial&appid=${key}`);
        return res;
    }
    catch(err) {
        return err.message;
    }
}

export {
    fetchWeather,
}