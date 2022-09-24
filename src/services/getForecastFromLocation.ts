import { formatDate } from "../helpers/formatDate";
import { ForecastInfo } from "../types";

export async function getForecastFromLocation(
  lat: number,
  lon: number
): Promise<Array<ForecastInfo>> {
  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${
      import.meta.env.VITE_OPEN_WEATHER_API_KEY
    }&units=metric`
  );

  const data = await res.json();

  const fiveDaysForecast: Array<ForecastInfo> = [3, 11, 19, 27, 35].map(
    index => {
      const info = data.list[index];

      return {
        weather: info.weather[0].main,
        date: formatDate(new Date(info.dt_txt)),
        minTemp: info.main.temp_min,
        maxTemp: info.main.temp_max,
      };
    }
  );

  return fiveDaysForecast;
}
