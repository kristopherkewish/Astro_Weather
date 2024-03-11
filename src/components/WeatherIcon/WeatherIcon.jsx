import styles from './WeatherIcon.module.css';

export default function WeatherIcon({category}) {
    const iconURLs = {
        sunnyIcon: '/sunny.png',
        windyIcon: '/windy.png',
        rainyIcon: '/rainy.png',
        cloudyIcon: '/cloudy.png'
    };
    
    const getWeatherIcon = (weatherCategory) => {
        switch (weatherCategory) {
            case 'Sunny' :
                return iconURLs['sunnyIcon'];
            case 'Windy' :
                return iconURLs['windyIcon'];
            case 'Rainy' :
                return iconURLs['rainyIcon'];
            case 'Cloudy' :
                return iconURLs['cloudyIcon'];
        }
    };
    
    return (
        <img 
            id={styles.weatherIcon} 
            src={getWeatherIcon(category)}
            alt="weather icon" 
        />
    )
}