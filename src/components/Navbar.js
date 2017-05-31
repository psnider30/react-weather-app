import React from 'react'

const Navbar = ({ changeForecast }) => 
  <div>
    <button onClick={() => changeForecast('currently')}>Current</button>
    <button onClick={() => changeForecast('minutely')}>By Minute</button>
    <button onClick={() => changeForecast('hourly')}>By Hour</button>
    <button onClick={() => changeForecast('daily')}>By Day</button>
  </div>;

export default Navbar;