import Temperature from "./Temperature.js";
import Weather from "./Weather.js";
import CurrentLocation from "./CurrentLocation.js";

export default function Container(props) {
  return (
    <div className="container">
      <div className="card card-one">
        <div className="card-body">
          <h1 id="place">place</h1>
          <h1 id="current-date">today</h1>
          <Temperature name="Groningen" temperature={19} />
          <Weather />
          <CurrentLocation />
        </div>
      </div>
    </div>
  );
}
