import React from 'react';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.container}>
            <h1>Weather App</h1>
        </header>
    );
}
