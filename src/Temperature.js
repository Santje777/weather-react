import React, { useState } from "react";

export default function Temperature(props) {
  let [temperature, setTemperature] = useState(props.temperature);
  let [unit, setUnit] = useState("°C");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("°F");
    setTemperature(Math.round((props.temperature * 9) / 5 + 32));
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("°C");
    setTemperature(props.temperature);
  }

return (<div>
      <div className="temperature">
        <a href="/" onClick={showCelsius} className="celcius" id="celcius-link">
          °C |
        </a>
        <a
          href="/"
          onClick={showFahrenheit}
          className="fahrenheit"
        >
          °F
        </a> 
        <h2 className="fahrenheit">
        {" "} ➡️{temperature} ({unit}){" "}
      </h2>
      </div></div>
  
) }

