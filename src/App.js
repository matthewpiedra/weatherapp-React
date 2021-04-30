import React, { Component } from 'react';
import styles from "./App.module.css";
import { Header, Search, Weather } from './components';

export default class App extends Component {
  render() {
    return (
       <section className={styles.container}>
          <Header />
          <Search />
          <Weather />
       </section>
    );
  }
}
