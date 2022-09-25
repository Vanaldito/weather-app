import { getAbbrFromDirection } from "../../helpers/getAbbrFromDirection";

import ArrowIcon from "../Icons/Arrow";

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
        <div className="wind-direction">
          <div
            className="wind-compass"
            style={
              {
                "--rotation": `${weather.windDirection}deg`,
              } as React.CSSProperties
            }
          >
            <ArrowIcon />
          </div>
          {getAbbrFromDirection(weather.windDirection)}
        </div>
      </div>
      <div className="highlight">
        <h3 className="highlight__title">Humidity</h3>
        <div className="highlight__content">
          {weather.humidity}
          <span className="highlight__unit">%</span>
        </div>
        <div className="humidity-percentage">
          <div className="humidity-label">
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </div>
          <div
            className="humidity-bar"
            style={
              { "--percentage": `${weather.humidity}%` } as React.CSSProperties
            }
          />
          <div className="humidity-percentage-symbol">%</div>
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
