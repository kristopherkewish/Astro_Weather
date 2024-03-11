import WeatherInfo from '../WeatherInfo/WeatherInfo';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import styles from './Weather.module.css';

export default function Weather({temperature, description, location}) {
    return (
        <main className={styles.main}>
            <section className={styles.divider}>
                <WeatherInfo 
                    temperature={temperature}
                    description={description}
                    location={location}
                />
            </section>
            <section className={styles.divider}>
                <WeatherIcon 
                    category={description}
                />
            </section>
        </main>
    )
}