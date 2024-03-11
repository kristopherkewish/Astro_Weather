import styles from './WeatherInfo.module.css';

export default function WeatherInfo({temperature, description, location}) {
    return (
        <>
            <div id="temperature" className={`${styles.info} ${styles.temperature}`}>{temperature}°C</div>
            <div id="description" className={`${styles.info} ${styles.description}`}>{description}</div>
            <div id="location" className={`${styles.info} ${styles.location}`}>
                <span>{location}</span>
                <img src='/src/assets/location.png' alt="location icon" />
            </div>
        </>
    )
}