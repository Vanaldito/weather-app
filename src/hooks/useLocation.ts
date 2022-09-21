import { useEffect, useState } from "react";
import { getCityInfoFromLocation } from "../services/getCityInfoFromLocation";
import { getLocationFromIp } from "../services/getLocationFromIp";
import { LocationInfo } from "../types";

export function useLocation() {
  const [locationInfo, setLocationInfo] = useState<LocationInfo | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      geolocationSuccessCallback,
      geolocationErrorCallback
    );
  }, []);

  function geolocationSuccessCallback(data: GeolocationPosition) {
    const lat = data.coords.latitude;
    const lon = data.coords.longitude;

    getCityInfoFromLocation(lat, lon).then(data => {
      setLocationInfo({
        lat,
        lon,
        city: data.city,
        country: data.country,
      });
    });
  }

  function geolocationErrorCallback() {
    getLocationFromIp().then(info => setLocationInfo(info));
  }

  return locationInfo;
}
