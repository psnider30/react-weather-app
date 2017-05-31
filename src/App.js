import React, { Component } from 'react'
import './App.css'
import fetchJsonp from 'fetch-jsonp'

const APIURL = `https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY}/`

class App extends Component {

  constructor() {
    super() 

  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      return fetchJsonp(`${APIURL}${position.coords.latitude},${position.coords.longitude}`)
      .then(response => response.json())
      .then(data => console.log(data))
    }) 
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Weather App</h1>
      </div>
    );
  }
}

export default App;
