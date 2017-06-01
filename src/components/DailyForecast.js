import React from 'react'
import moment from 'moment'

const DailyForecast = ({ forecastData }) => {
  const renderForecasts = forecastData.map(({ apparentTemperatureMax, apparentTemperatureMin, precipProbability, humidity, summary, sunriseTime, sunsetTime, temperatureMax, temperatureMin, time }, index) => 
    <div key={index} className="forecast-card">
      <h3>{summary}</h3>
      <p>{moment.unix(time).format('LL')}</p>
      <p>HI: {temperatureMax}</p>
      <p>Low: {temperatureMin}</p>
      <p>Relative HI: {apparentTemperatureMax}</p>
      <p>Relative LOW: {apparentTemperatureMin}</p>
      <p>Chance of Percipitation: {Math.round(precipProbability * 100)}%</p>
      <p>Humidity: {Math.round(humidity * 100)}%</p>
      <p>Sunrise: {moment.unix(sunriseTime).format('LT')}</p>
      <p>Sunset: {moment.unix(sunsetTime).format('LT')}</p>
    </div>
  )

  return (
    <div>
      <h2>Daily Forecast</h2>
      {renderForecasts}
    </div>
  )
}
  
export default DailyForecast