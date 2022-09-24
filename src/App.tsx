import { useLocation } from "./hooks/useLocation";
import Weather from "./components/Weather";

import "./App.css";

export default function App() {
  const {
    locationInfo,
    requestLocationFromGeolocation,
    requestLocationFromCity,
  } = useLocation();

  return (
    <div className="app">
      <Weather
        location={locationInfo}
        requestLocationFromGeolocation={requestLocationFromGeolocation}
        requestLocationFromCity={requestLocationFromCity}
      />
    </div>
  );
}
