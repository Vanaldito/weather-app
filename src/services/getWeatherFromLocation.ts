import { WeatherInfo } from "../types";

export async function getWeatherFromLocation(
  lat: number,
  lon: number
): Promise<WeatherInfo> {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
      import.meta.env.VITE_OPEN_WEATHER_API_KEY
    }&units=metric`
  );
  const data = await res.json();

  return {
    weather: data.weather[0].main,
    temperature: data.main.temp,
    windSpeed: data.wind.speed,
    windDirection: data.wind.deg,
    humidity: data.main.humidity,
    visibility: data.visibility,
    pressure: data.main.pressure,
  };
}
