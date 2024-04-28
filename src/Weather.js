import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayData(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "535cacbb3f8a0df0aeb4790235b9541f";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(displayData);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search for a city"
        onChange={updateCity}
      />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div className="SearchCity">
        <br />
        {form}
        {
          <ul>
            <li>Temperature: {Math.round(weather.temperature)} °C</li>
            <li>Humidity: {weather.humidity} %</li>
            <li>Wind: {weather.wind} km/h</li>
            <li>Description: {weather.description}</li>
            <li>
              {" "}
              <img src={weather.icon} alt="Weather icon" />
            </li>
          </ul>
        }
      </div>
    );
  } else {
    return form;
  }
}
