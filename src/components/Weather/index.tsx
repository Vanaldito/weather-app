import { useLocation } from "../../hooks/useLocation";
import { useWeather } from "../../hooks/useWeather";

import "./styles.css";

export default function Weather() {
  const location = useLocation();
  const weather = useWeather(location);

  if (!weather) {
    return <>Loading...</>;
  }

  return (
    <div className="weather">
      <div className="weather__temperature">
        {Math.round(weather.temperature)}
        <span className="weather__temperature__unit">°C</span>
      </div>
      <div className="weather__weather">{weather.weather}</div>
    </div>
  );
}
