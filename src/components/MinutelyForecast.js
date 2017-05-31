import React from 'react'

const MinutelyForecast = ({ forecastData }) => {
  const renderForecast = forecastData.map((forecast, index) => {
    const { precipIntesity, precipProbability, time } = forecast
    return (
      <div key={index} style={{ border: 'solid 1px black', padding: '12px', margin: '10px' }}>
        <h3>Time: {time}</h3>
        <h4>Intesity of Precipitation: {precipIntesity}</h4>
        <h4>Chance of Precipitation: {precipProbability}</h4>
      </div>
    )
  })

  return (
    <div>
      <h2>Minutely Forecast</h2>
      {renderForecast}
    </div>
  )
}
  
 
export default MinutelyForecast;