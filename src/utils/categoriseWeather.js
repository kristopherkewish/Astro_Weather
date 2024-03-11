export const categoriseWeather = (weather) => {
    const {description, wind_speed} = weather;
    
    if (wind_speed >= 20) {
        return 'Windy'
    } else {
        if (description == 'Clear') {
            return 'Sunny'
        } else if (description == 'Clouds') {
            return 'Cloudy'
        } else {
            return 'Rainy'
        }
    }
};