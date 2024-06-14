import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready:false });
  const [city, setCity] = useState(props.defaultCity);

  function displayData(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

    function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "535cacbb3f8a0df0aeb4790235b9541f";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayData);
  }

  if (weatherData.ready) {
    return (
      <div className="SearchCity">
          <h1>
            <FormattedDate date={weatherData.date} />
          </h1>
          <br />
            <Temperature celsius={weatherData.temperature} />
            <h2 className="temperature celsius">
       in {weatherData.city}{" "}
      </h2>
      <br />
        
       <br />
        <div className="description"><i>{weatherData.description}</i>
        </div>
        <WeatherIcon code={weatherData.icon} alt={weatherData.description} size={100} color="rgb(253, 216, 81)"/>
        <br />
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
        <div className="card card-one-screen" id="extra">
          <div className="card-body"></div>
          {
            <ul>
              <li>Humidity: 💦 {weatherData.humidity} %</li>
              <li>Wind: 🌬️💨{weatherData.wind} km/h 🌫️</li>
            </ul>
          }
        </div> 
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
