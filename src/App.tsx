import { useLocation } from "./hooks/useLocation";
import { useWeather } from "./hooks/useWeather";

import Weather from "./components/Weather";
import Forecast from "./components/Forecast";

import "./App.css";

export default function App() {
  const {
    locationInfo,
    requestLocationFromGeolocation,
    requestLocationFromCity,
  } = useLocation();
  const weather = useWeather(locationInfo);

  if (!weather) return <>Loading ...</>;

  return (
    <div className="app">
      <Weather
        location={locationInfo}
        requestLocationFromGeolocation={requestLocationFromGeolocation}
        requestLocationFromCity={requestLocationFromCity}
        weather={weather}
      />
      <Forecast location={locationInfo} />
    </div>
  );
}
