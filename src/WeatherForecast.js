import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
const [loaded, setLoaded] = useState(false);
const [forecast, setForecast] = useState(null);
  
  function handleResponse(response) {
  setForecast(response.data.daily);
  setLoaded(true);
    }
    
    if (loaded) { 
      console.log(forecast);
      return (
      <div className="container-sm">
        <div className="card card-three">
          <div className="card-body">
              <div className="row">
              <div className="col">
                <WeatherForecastDay data={forecast[0]} />
             </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey= "3734of2cfc5035aca32f96t5a9b478fb";
    let longitude= props.coordinates.lon;
    let latitude= props.coordinates.lat;
    let apiUrl= `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    
    return null;
  }
}