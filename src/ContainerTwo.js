import WeatherIcon from "./WeatherIcon.js";

export default function ContainerTwo(props) {
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
           <div className="col">
           <h3>Thursday</h3>
          <WeatherIcon code="09d" size={70} color={"#0d6efd"}/>
          <span className="card-two-screen"><b>19°C</b>  10°C</span>
           </div>
           <div className="col">
           <h3>Thursday</h3>
          <WeatherIcon code="09d" size={70} color={"#0d6efd"}/>
          <span className="card-two-screen"><b>19°C</b>  10°C</span>
           </div>
           <div className="col">
           <h3>Thursday</h3>
          <WeatherIcon code="09d" size={60} color={"#0d6efd"}/>
          <span className="card-two-screen"><b>19°C</b>  10°C</span>
           </div>
           </div>
           <div className="row">
           <div className="col">
           <h4>Thursday</h4>
          <WeatherIcon code="09d" size={60} color={"rgb(55, 43, 226)"}/>
          <span className="card-two-screen"><b>19°C</b>  10°C</span>
           </div>
           <div className="col">
           <h4>Thursday</h4>
          <WeatherIcon code="09d" size={60} color={"rgb(55, 43, 226)"}/>
          <span className="card-two-screen"><b>19°C</b>  10°C</span>
           </div>
           <div className="col">
           <h4>Thursday</h4>
          <WeatherIcon code="09d" size={60} color={"rgb(55, 43, 226)"}/>
          <span className="card-two-screen"><b>19°C</b>  10°C</span>
           </div>
           <div className="col">
           <h4>Thursday</h4>
          <WeatherIcon code="09d" size={60} color={"rgb(55, 43, 226)"}/>
          <span className="card-two-screen"><b>19°C</b>  10°C</span>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}
