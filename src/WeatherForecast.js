import WeatherIcon from "./WeatherIcon.js";
import axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }
    
    let apiKey= "3734of2cfc5035aca32f96t5a9b478fb";
    let longitude= props.coordinates.lon;
    let latitude= props.coordinates.lat;
    let apiUrl= `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

  return (
    <div className="container-sm">
      <div className="card card-three">
        <div className="card-body">
            <div className="row">
            <div className="col">
          <h3>Thursday</h3>
          <WeatherIcon code="09d" size={70} color={"#0d6efd"}/>
          <span className="card-two-screen"><b>19°C</b>  10°C</span>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}
