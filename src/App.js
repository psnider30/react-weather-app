import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Forecast from './components/Forecast'
import MinutelyForecast from './components/MinutelyForecast'
import DailyForecast from './components/DailyForecast'

import { changeRoute } from './actions/routeActions';
import { stopFetchingData } from './actions/fetchingDataActions';
import { fetchWeatherData } from './actions/weatherDataActions';

class App extends Component {

  componentWillMount() {
    window.history.pushState('', {}, 'currently')
  }

  componentDidMount() {
    this.props.fetchWeatherData()
  }

  handleRouteChange = routeName => this.props.changeRoute({ routeName: routeName })

  render() {
    const { weatherData, fetchingData, routeName } = this.props
    const forecast = weatherData[routeName]
    const pathName = window.location.pathname.split("/")[1];

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
              <Navbar changeRoute={this.handleRouteChange} />
              {routeName === 'currently' && 
                <div>
                  <h2>Current Forecast</h2>
                  <Forecast forecast={forecast} />
                </div>
              }
              {routeName === 'minutely' && <MinutelyForecast forecastData={forecast.data} />}
              {routeName === 'hourly' && 
                <div>
                  <h2>Hourly Forecast</h2>
                  {forecast.data.map((forecast, index) => <Forecast key={index} forecast={forecast} />)}
                </div>
              }
              {routeName === 'daily' && <DailyForecast forecastData={forecast.data} />}
            </div>
          }
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    fetchingData: state.fetchingData,
    routeName: state.route.routeName,
    weatherData: state.weatherData
  }), { 
    changeRoute,
    stopFetchingData,
    fetchWeatherData,
  }
)(App);