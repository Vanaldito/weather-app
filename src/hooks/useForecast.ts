import { useEffect, useState } from "react";
import { getForecastFromLocation } from "../services/getForecastFromLocation";

import { LocationInfo, ForecastInfo } from "../types";

export function useForecast(locationInfo: LocationInfo | null) {
  const [forecastInfo, setForecastInfo] = useState<Array<ForecastInfo> | null>(
    null
  );

  useEffect(() => {
    if (!locationInfo) return;

    getForecastFromLocation(locationInfo.lat, locationInfo.lon).then(info =>
      setForecastInfo(info)
    );
  }, [locationInfo]);

  return forecastInfo;
}
