import { useLocation } from "./hooks/useLocation";

import "./App.css";

export default function App() {
  const location = useLocation();

  console.log(location);

  return <h1>Weather App</h1>;
}
