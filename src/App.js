import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Forecast from './components/Forecast'
import MinutelyForecast from './components/MinutelyForecast'
// import HourlyForecast from './components/HourlyForecast'
import DailyForecast from './components/DailyForecast'

const APIURL = `https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_KEY}/`

class App extends Component {
  constructor() {
    super() 

    this.state = {
      fetchingData: true,
      weatherData: {},
      forecastKey: 'currently',
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords
      
      fetchJsonp(`${APIURL}${latitude},${longitude}`)
        .then(response => response.json())
        .then(weatherData => this.setState({ 
          fetchingData: false,
          weatherData 
        }))
    });
  }

  handleForecastChange = forecastKey => this.setState({ forecastKey: forecastKey })

  render() {
    const { fetchingData, weatherData, forecastKey } = this.state
    const forecast = weatherData[forecastKey]

    return (
      <div className="App">
        <div className="App-header">
          <h2>Weather App</h2>
        </div>
        <div className="App-intro">
          {
            fetchingData ?
            <img src={logo} className="App-logo" alt="logo" />
            :
            <div>
              <Navbar changeForecast={this.handleForecastChange} />
              {forecastKey === 'currently' && 
                <div>
                  <h2>Current Forecast</h2>
                  <Forecast forecast={forecast} />
                </div>
              }
              {forecastKey === 'minutely' && <MinutelyForecast forecastData={forecast.data} />}
              {forecastKey === 'hourly' && 
                <div>
                  <h2>Hourly Forecast</h2>
                  {forecast.data.map((forecast, index) => <Forecast key={index} forecast={forecast} />)}
                </div>
              }
              {forecastKey === 'daily' && <DailyForecast forecastData={forecast.data} />}
            </div>
          }
        </div>
      </div>
    );
  }
}

export default App;