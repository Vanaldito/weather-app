export interface LocationInfo {
  lat: number;
  lon: number;
  city: string;
}

export interface WeatherInfo {
  weather: string;
  temperature: number;
  windSpeed: number;
  windDirection: number;
  humidity: number;
  visibility: number;
  pressure: number;
}

export interface ForecastInfo {
  weather: string;
  date: string;
  minTemp: number;
  maxTemp: number;
}
