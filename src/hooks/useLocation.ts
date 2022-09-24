import { useEffect, useState } from "react";
import { getCityInfoFromLocation } from "../services/getCityInfoFromLocation";
import { getLocationFromCity } from "../services/getLocationFromCity";
import { getLocationFromIp } from "../services/getLocationFromIp";

import { LocationInfo } from "../types";

export function useLocation() {
  const [locationInfo, setLocationInfo] = useState<LocationInfo | null>(null);

  useEffect(() => {
    getLocationFromIp().then(info => setLocationInfo(info));
  }, []);

  function requestLocationFromGeolocation() {
    navigator.geolocation.getCurrentPosition(
      geolocationSuccessCallback,
      geolocationErrorCallback
    );

    function geolocationSuccessCallback(data: GeolocationPosition) {
      const lat = data.coords.latitude;
      const lon = data.coords.longitude;

      getCityInfoFromLocation(lat, lon).then(data => {
        setLocationInfo({
          lat,
          lon,
          city: data.city,
        });
      });
    }

    function geolocationErrorCallback() {
      getLocationFromIp().then(info => setLocationInfo(info));
    }
  }

  function requestLocationFromCity(city: string) {
    getLocationFromCity(city).then(data => {
      setLocationInfo({
        city: city,
        lat: data.lat,
        lon: data.lon,
      });
    });
  }

  return {
    locationInfo,
    requestLocationFromGeolocation,
    requestLocationFromCity,
  };
}
