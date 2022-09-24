import { useEffect, useState } from "react";
import { getWeatherFromLocation } from "../services/getWeatherFromLocation";

import { LocationInfo, WeatherInfo } from "../types";

export function useWeather(locationInfo: LocationInfo | null) {
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo | null>(null);

  useEffect(() => {
    if (!locationInfo) return;

    getWeatherFromLocation(locationInfo.lat, locationInfo.lon).then(info =>
      setWeatherInfo(info)
    );
  }, [locationInfo]);

  return weatherInfo;
}
