import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super() 

    this.state = {
      fetchingData: true,
      weatherData: {}
    }
  }
  
  render() {
    const { fetchingData } = this.state
    console.log(fetchingData)
    return (
      <div className="App">
        <div className="App-header">
          <h2>Weather App</h2>
        </div>
        <p className="App-intro">
          {
            fetchingData ?
            <img src={logo} className="App-logo" alt="logo" />
            :
            <h1>Data is received</h1>
          }
        </p>
      </div>
    );
  }
}

export default App;