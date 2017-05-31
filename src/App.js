import React, { Component } from 'react'
import './App.css'
import fetchJsonp from 'fetch-jsonp'
import Navbar from './components/Navbar'

const APIURL = `https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY}/`

class App extends Component {

  constructor() {
    super() 

    this.state = {
      fetchingWeatherData: true,
      weatherData: {},
      forecastKey: null,
    }
  }

  handleForecastChange = forecastKey => this.setState({ forecastKey: forecastKey })

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      return fetchJsonp(`${APIURL}${position.coords.latitude},${position.coords.longitude}`)
      .then(response => response.json())
      .then(data => this.setState({ 
        fetchingWeatherData: false,
        weatherData: data,
        forecastKey: 'currently'
      }))
    }) 
  }

  render() {
    const { weatherData, fetchingWeatherData, forecastKey } = this.state
    const forecast = weatherData[forecastKey]
    
    return (
      <div>
        <h1>Weather App</h1>
        {fetchingWeatherData ?
          <p>Loading...</p>
          :
          <div>
            <Navbar changeForecast={this.handleForecastChange} />
          </div>
        }
      </div>
    )
  }
}

export default App
