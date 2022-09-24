import { WeatherInfo } from "../../types";

import "./styles.css";

interface HighlightsProps {
  weather: WeatherInfo;
}

export default function Highlights({ weather }: HighlightsProps) {
  return (
    <div className="highlights">
      <h2 className="highlights__title">Today&apos;s Highlights</h2>
      <div className="highlight">
        <h3 className="highlight__title">Wind Status</h3>
        <div className="highlight__content">
          {(weather.windSpeed * 2.34).toFixed(1)}
          <span className="highlight__unit">mph</span>
        </div>
      </div>
      <div className="highlight">
        <h3 className="highlight__title">Humidity</h3>
        <div className="highlight__content">
          {weather.humidity}
          <span className="highlight__unit">%</span>
        </div>
      </div>
      <div className="highlight">
        <h3 className="highlight__title">Visibility</h3>
        <div className="highlight__content">
          {(weather.visibility / 1609.34).toFixed(1)}
          <span className="highlight__unit">miles</span>
        </div>
      </div>
      <div className="highlight">
        <h3 className="highlight__title">Air Pressure</h3>
        <div className="highlight__content">
          {weather.pressure}
          <span className="highlight__unit">mb</span>
        </div>
      </div>
    </div>
  );
}
