import React, { Component } from 'react'
import './App.css'
import fetchJsonp from 'fetch-jsonp'

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
    console.log(forecast)
    return (
      <div>
        <h1>Weather App</h1>
        {fetchingWeatherData ?
          <p>Loading...</p>
          :
          <div>
            Forecast and Navbar go here
          </div>
        }
      </div>
    )
  }
}

export default App
