import { formatDate } from "../../helpers/formatDate";
import { useWeather } from "../../hooks/useWeather";

import WeatherSearch from "../WeatherSearch";
import WeatherImg from "../WeatherImg";

import LocationIcon from "../Icons/Location";
import MyLocationIcon from "../Icons/MyLocation";

import { LocationInfo } from "../../types";

import "./styles.css";

interface WeatherProps {
  location: LocationInfo | null;
  requestLocationFromGeolocation: () => void;
  requestLocationFromCity: (city: string) => void;
}

export default function Weather({
  location,
  requestLocationFromGeolocation,
  requestLocationFromCity,
}: WeatherProps) {
  const weather = useWeather(location);

  if (!weather) {
    return <>Loading...</>;
  }

  return (
    <div className="weather">
      <div className="weather__actions">
        <WeatherSearch searchCity={requestLocationFromCity} />
        <button
          onClick={requestLocationFromGeolocation}
          type="button"
          className="weather__request-geolocation-button"
        >
          <MyLocationIcon />
        </button>
      </div>
      <WeatherImg weather={weather.weather} />
      <div className="weather__temperature">
        {Math.round(weather.temperature)}
        <span className="weather__temperature__unit">°C</span>
      </div>
      <div className="weather__weather">{weather.weather}</div>
      <div className="weather__date">
        <span>Today</span> <span>•</span> <span>{formatDate(new Date())}</span>
      </div>
      <div className="weather__location">
        <LocationIcon /> {location?.city}
      </div>
    </div>
  );
}
