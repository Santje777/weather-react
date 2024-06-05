import Weather from "./Weather.js";
import CurrentLocation from "./CurrentLocation.js";

export default function Container(props) {
  return (
    <div className="container-sm">
      <div className="card card-one">
        <div className="card-body">
          <CurrentLocation />
          <Weather />
        </div>
      </div>
    </div>
  );
}
