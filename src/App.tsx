import { useLocation } from "./hooks/useLocation";
import Weather from "./components/Weather";

import "./App.css";
import { getForecastFromLocation } from "./services/getForecastFromLocation";
import Forecast from "./components/Forecast";

export default function App() {
  const {
    locationInfo,
    requestLocationFromGeolocation,
    requestLocationFromCity,
  } = useLocation();

  locationInfo && getForecastFromLocation(locationInfo.lat, locationInfo.lon);

  return (
    <div className="app">
      <Weather
        location={locationInfo}
        requestLocationFromGeolocation={requestLocationFromGeolocation}
        requestLocationFromCity={requestLocationFromCity}
      />
      <Forecast location={locationInfo} />
    </div>
  );
}
