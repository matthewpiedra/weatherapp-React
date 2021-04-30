import axios from 'axios';

const url = `https://api.openweathermap.org/data/2.5`;

async function fetchWeather(city) {
    try {
        const res = await axios.get(`${url}/weather?q=${city}&units=imperial&appid=${window.env.API_KEY}`);
        return res;
    }
    catch(err) {
        return err.message;
    }
}

export {
    fetchWeather,
}