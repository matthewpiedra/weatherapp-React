import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getWeather } from '../../redux/weather/weatherSlice';
import styles from './Search.module.css';

export default function Search() {
    const [city, setCity] = useState(''); 

    const dispatch = useDispatch();

    function handleChange(e) {
        setCity(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        const input = e.target.city.value;

        dispatch(getWeather(input));
    }

    return (
        <section className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <input 
                    className={styles.searchBar} 
                    type="search" 
                    name="city" 
                    value={city} 
                    onChange={handleChange}
                    placeholder="e.g. new york, paris, london..."
                />
                <button className={styles.searchBtn} type="submit">search</button>
            </form>
        </section>
    );
}
