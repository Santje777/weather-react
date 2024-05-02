import Temperature from "./Temperature.js";
import Weather from "./Weather.js";
import CurrentLocation from "./CurrentLocation.js";

export default function Container(props) {
  return (
    <div className="container-sm">
      <div className="card card-one">
        <div className="card-body">
          <CurrentLocation />
          <h1 className="to-the-left" id="place">
            place
          </h1>
          <h1 className="to-the-left" id="current-date">
            today
          </h1>
          <Temperature name="Groningen" temperature={19} />
          <Weather />
        </div>
      </div>
    </div>
  );
}
