import "./styles.css";

interface WeatherImgProps {
  weather: string;
}

export default function WeatherImg({ weather }: WeatherImgProps) {
  const weatherToImg: { [key: string]: string | undefined } = {
    Thunderstorm: "/Thunderstorm.png",
    Drizzle: "/LightRain.png",
    Rain: "/HeavyRain.png",
    Snow: "/Snow.png",
    Mist: "/LightCloud.png",
    Squall: "/Shower.png",
    Clear: "/Clear.png",
    Clouds: "/HeavyCloud.png",
  };

  return (
    <img
      className="weather-img"
      src={weatherToImg[weather] ?? "Clear.png"}
      alt="Weather image"
    />
  );
}
