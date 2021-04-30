import React from 'react';
import { useSelector } from 'react-redux';
import { selectWeather } from '../../redux/weather/weatherSlice';
import styles from "./Weather.module.css";
import sad from "../../images/sadface.png";

export default function Weather() {
    const { weather } = useSelector(selectWeather);

    console.log(weather);

    if(weather.loading === "pending") {
        return ( <div className={styles.loadingspinner}><div className={styles.circle}>
                 <div></div>
                 </div></div>
             );
    }
    else if(weather.loading === "idle") {
        return <></>
    }
    else if(!weather.data || weather.err) {
        return (
            <div className={styles.errorContainer}>
               <img className={styles.sadface} src={sad} alt="sad face"/>
               <h2>City not found</h2>
            </div>
        );
    }
    else {
        const { name, main: { temp }, sys: { country } } = weather.data;
        const { description, icon } = weather.data.weather[0];

        return (
            <section className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <h2>{name}, {country}</h2>
                    </div>
                    <div className={styles.cardContent}>
                        <span> {temp} &#8451;</span>
                        <img className={styles.icon} src={`http://openweathermap.org/img/wn/${icon}.png`} alt="weather"/>
                        <p>{description}</p>
                    </div>
                </div>
            </section>
        );
    }
}
