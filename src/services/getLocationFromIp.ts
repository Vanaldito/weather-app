import { LocationInfo } from "../types";

export async function getLocationFromIp(): Promise<LocationInfo> {
  const res = await fetch("https://ipapi.co/json");

  const data = await res.json();

  return {
    lat: data.latitude,
    lon: data.longitude,
    city: data.city,
  };
}
