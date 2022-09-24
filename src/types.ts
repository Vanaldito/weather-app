export interface LocationInfo {
  lat: number;
  lon: number;
  city: string;
}

export interface WeatherInfo {
  weather: string;
  temperature: number;
}

export interface ForecastInfo {
  weather: string;
  date: string;
  minTemp: number;
  maxTemp: number;
}
