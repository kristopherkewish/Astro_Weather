const buildRequest = (coordinates, api_key) => {
    const {lat, lon} = coordinates;
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;

    return url;
};

const fetchWeatherData = async (endpoint) => {
    try {
        const response = await fetch(endpoint);

        if(!response.ok) {
            throw new Error('Network response not ok...');
        }

        const weather = await response.json();

        return weather;
    } catch (error) {
        console.log(error);
    }
};

const extractKeyWeatherValues = (weatherData) => {
    const temperature = Math.round(weatherData.current.temp);
    const description = weatherData.current.weather[0].main;
    const wind_speed = weatherData.current.wind_speed;
    
    return {
        temperature,
        description,
        wind_speed
    }
};

const getWeather = async (coordinates, api_key) => {
    const endpoint = buildRequest(coordinates, api_key);

    try {
        const apiWeatherData = await fetchWeatherData(endpoint);
        const weather = extractKeyWeatherValues(apiWeatherData);
        return weather;
    } catch(error) {
        console.log(error);
    }
};

export { getWeather };