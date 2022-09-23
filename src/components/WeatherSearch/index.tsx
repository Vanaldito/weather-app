import { useState } from "react";
import CloseIcon from "../Icons/Close";

import "./styles.css";

interface WeatherSearchProps {
  searchCity: (city: string) => void;
}

export default function WeatherSearch({ searchCity }: WeatherSearchProps) {
  const [city, setCity] = useState("");
  const [displayMenu, setDisplayMenu] = useState(false);

  function openMenu() {
    setDisplayMenu(true);
  }

  function closeMenu() {
    setDisplayMenu(false);
  }

  function changeCity(event: React.ChangeEvent<HTMLInputElement>) {
    setCity(event.target.value);
  }

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!city) return;
    searchCity(city);

    setCity("");
    setDisplayMenu(false);
  }

  return (
    <>
      <button
        className="weather-search__open-button"
        type="button"
        onClick={openMenu}
      >
        Search for places
      </button>
      <div
        className={`weather-search ${
          displayMenu ? "weather-search--open" : "weather-search--close"
        }`}
      >
        <button
          type="button"
          onClick={closeMenu}
          className="weather-search__close-button"
        >
          <CloseIcon />
        </button>
        <form className="weather-search__form" onSubmit={submitHandler}>
          <input
            className="weather-search__input"
            type="text"
            placeholder="Search Location"
            value={city}
            onChange={changeCity}
          />
          <button className="weather-search__search-button" type="submit">
            Search
          </button>
        </form>
      </div>
    </>
  );
}
