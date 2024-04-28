import React from "react";
import axios from "axios";

export default function Weather(props) {
  function displayData(response) {
    alert(
      `The weather in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )}`
    );
  }

  let apiKey = "535cacbb3f8a0df0aeb4790235b9541f";
  let units = "metric";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

  axios.get(url).then(displayData);
  return <h1>Hello</h1>;
}
