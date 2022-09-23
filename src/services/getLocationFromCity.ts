interface LocationInfo {
  lat: number;
  lon: number;
}

export async function getLocationFromCity(city: string): Promise<LocationInfo> {
  const res = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${
      import.meta.env.VITE_OPEN_WEATHER_API_KEY
    }`
  );
  const data = await res.json();

  return {
    lat: data[0].lat,
    lon: data[0].lon,
  };
}
