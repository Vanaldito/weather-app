import { LocationInfo } from "../types";

export async function getLocationFromIp(): Promise<LocationInfo> {
  const res = await fetch("http://ip-api.com/json");

  const data = await res.json();

  return {
    lat: data.lat,
    lon: data.lon,
    city: data.city,
  };
}
