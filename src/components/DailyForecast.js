import React from 'react'

const DailyForecast = ({ forecastData }) => {
  const renderForecast = forecastData.map((forecast, index) => {
    const { apparentTemperatureMax, apparentTemperatureMin, precipProbability, humidity, summary, temperatureMax, temperatureMin, time } = forecast
    return (
      <div key={index} style={{ border: 'solid 1px black', padding: '12px', margin: '10px' }}>
        <h3>Time: {time}</h3>
        <h3>Status: {summary}</h3>
        <h4>HI: {temperatureMax}</h4>
        <h4>LOW: {temperatureMin}</h4>
        <h4>Feels Like HI: {apparentTemperatureMax}</h4>
        <h4>Feels Like LOW: {apparentTemperatureMin}</h4>
        <h4>Chance of Rain: {precipProbability}%</h4>
        <h4>Humidity: {humidity}%</h4>
      </div>
    )
  })

  return (
    <div>
      <h2>Daily Forecast</h2>
      {renderForecast}
    </div>
  )
}
  
 
export default DailyForecast;