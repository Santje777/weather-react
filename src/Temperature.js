import React, { useState } from "react";
export default function Temperature(props) {
  let [temperature, setTemperature] = useState(props.temperature);
  let [unit, setUnit] = useState("Metric");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("Imperial");
    setTemperature(Math.round((props.temperature * 9) / 5 + 32));
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("Metric");
    setTemperature(props.temperature);
  }

  return (
    <div id="current-temperature">
      <div className="temperature">
        <a href="/" onClick={showCelsius} className="celcius" id="celcius-link">
          °C |
        </a>
        <a
          href="/"
          onClick={showFahrenheit}
          className="fahrenheit"
          id="fahrenheit-link"
        >
          °F
        </a>
      </div>
      <h2>
        It is {temperature} ({unit}) in {props.name}{" "}
      </h2>
    </div>
  );
}
