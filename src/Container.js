import Weather from "./Weather.js";

export default function Container(props) {
  return (
    <div className="container">
      <div className="card card-one">
        <div className="card-body">
          <h1 id="place">place</h1>
          <h1 id="current-date">today</h1>
          <h2 className="temperature" id="current-temperature">
            current temperature
          </h2>
          <a href="/" className="celcius" id="celcius-link">
            {" "}
            °C |{" "}
          </a>
          <a href="/" className="fahrenheit" id="fahrenheit-link">
            °F{" "}
          </a>
          <Weather />

          <div className="col-3 current-location-button" id="current-location">
            <button className="btn btn-success shadow-sm">
              Current location 🌐
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
