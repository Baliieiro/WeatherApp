import React from 'react'

const WeatherCard = ({ weather }) => {
  return (

    <div id="weather-data" className="">
      <h2>
        <i className="fa-solid fa-location-dot"></i>
        <span id="city">{weather.name}</span>
        <img src={`https://flagsapi.com/${weather.sys.country}/flat/24.png`}
          alt="Bandeira do país" id="country" />
      </h2>
      <p id="temperature"><span>{parseInt(weather.main.temp)}</span>&deg;C</p>
      <div id="description-container">
        <p id="description">{weather.weather[0].description}</p>
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Condições do tempo" id="weather-icon" />
      </div>
      <div id="details-container">
        <p id="humidity">
          <i className="fa-solid fa-droplet"></i>
          <span>{weather.main.humidity}%</span>
        </p>
        <p id="wind">
          <i className="fa-solid fa-wind"></i>
          <span>{weather.wind.speed}Km/h</span>
        </p>
      </div>
    </div>
  )
}

export default WeatherCard
