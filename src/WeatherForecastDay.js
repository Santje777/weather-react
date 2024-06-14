export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temperature.maximum);
        return `${temperature}°C`
    }

    function minTemperature() {
        let temperature = Math.round(props.data.temperature.minimum);
        return `${temperature}°C`
    }

    function day() {
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        
        return days[day];
    }

    return (
       <div className="WeatherForecast-day">
    <h3>{day()}</h3>
    <img src={props.data.condition.icon_url} alt="weather icon"/>
    <span className="card-two-screen"><b>{maxTemperature()}</b> {minTemperature()}</span>
</div>
)}