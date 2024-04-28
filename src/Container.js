export default function Container() {
  return (
    <div className="container">
      <div className="card card-one">
        <div className="card-body">
          <h1 id="place">place</h1>
          <h1 id="current-date">today</h1>
          <h2 className="temperature" id="current-temperature">
            current temperature
          </h2>
          <div id="weather-icon"></div>
          <a href="/" className="celcius" id="celcius-link">
            {" "}
            °C |{" "}
          </a>
          <a href="/" className="fahrenheit" id="fahrenheit-link">
            °F{" "}
          </a>

          <div className="card card-one-screen" id="extra">
            <div className="card-body"></div>
          </div>
          <form className="input-one" id="search-form space-place">
            <input
              type="search"
              placeholder="Type a city..."
              id="space-place"
            />
            <input
              type="submit"
              value="weather 🔎"
              className="form-control btn btn-primary shadow-sm"
            />
          </form>
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
