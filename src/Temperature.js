import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return(props.celsius * 9) / 5 + 32;
  }

  if (unit ==="celsius") {
return (
      <div className="Temperature">
        <span className="unit"> It is {Math.round(props.celsius)} </span>
        <span className="celsius">°C |</span>
        
        <a
          href="/"
          onClick={showFahrenheit}
          className="fahrenheit"
        >
          °F
        </a> 
      </div>
  );
} else {
  return (
    <div className="Temperature">
    <span className="unit">It is {Math.round(fahrenheit())}</span>
    <a href="/" onClick={showCelsius} className="fahrenheit">
      °C |
    </a>
    <span className="celsius"> °F </span>
  </div>
  )
}
}