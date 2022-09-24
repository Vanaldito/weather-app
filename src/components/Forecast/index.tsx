import { useForecast } from "../../hooks/useForecast";
import { LocationInfo } from "../../types";
import WeatherImg from "../WeatherImg";

import "./styles.css";

interface ForecastProps {
  location: LocationInfo | null;
}

export default function Forecast({ location }: ForecastProps) {
  const forecast = useForecast(location);

  return (
    <div className="forecast">
      <ul className="forecast__ul">
        {forecast?.map(({ weather, date, maxTemp, minTemp }, index) => (
          <li className="forecast__li" key={date}>
            <div className="forecast__date">
              {index === 0 ? "Tomorrow" : date}
            </div>
            <WeatherImg weather={weather} />
            <div className="forecast__temperature">
              <span className="forecast__max-temperature">
                {Math.round(maxTemp)}°C
              </span>
              <span className="forecast__min-temperature">
                {Math.round(minTemp)}°C
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
