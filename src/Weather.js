import React, { useState } from "react";
import axios from "axios";

import FormattedDate from "./FormattedDate.js";
import Temperature from "./Temperature.js";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({ });

  function displayData(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "535cacbb3f8a0df0aeb4790235b9541f";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(displayData);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form
      onSubmit={handleSubmit}
      className="input-one"
      id="search-form space-place"
    >
      <input
        type="search"
        placeholder="Search for a city"
        onChange={updateCity}
        id="space-place"
      />
      <input
        type="submit"
        value="weather 🔎"
        className="form-control btn btn-primary shadow-sm"
      />
    </form>
  );

  if (loaded) {
    return (
      <div className="SearchCity">
        <h1 className="to-the-left" id="place">
            {city}
          </h1>
          <h1 className="to-the-left" id="current-date">
            <FormattedDate date={weather.date} />
          </h1>
          <br />
          <h2>
        It is {Math.round(weather.temperature)} in {city}{" "}
      </h2>
      <br />
        <Temperature name={city} temperature={Math.round(weather.temperature)} />

        <i>{weather.description}</i>
        <img src={weather.icon} alt="Weather icon" />
        <br />
        {form}
        <div className="card card-one-screen" id="extra">
          <div className="card-body"></div>
          {
            <ul>
              <li>Humidity: 💦 {weather.humidity} %</li>
              <li>Wind: 🌬️💨{weather.wind} km/h 🌫️</li>
            </ul>
          }
        </div>
      </div>
    );
  } else {
    return form;
  }
}
