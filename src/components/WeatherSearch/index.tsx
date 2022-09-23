import { useState } from "react";
import CloseIcon from "../Icons/Close";

import "./styles.css";

export default function WeatherSearch() {
  const [displayMenu, setDisplayMenu] = useState(false);

  function openMenu() {
    setDisplayMenu(true);
  }

  function closeMenu() {
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
        <form className="weather-search__form">
          <input
            className="weather-search__input"
            type="text"
            placeholder="Search Location"
          />
          <button className="weather-search__search-button" type="submit">
            Search
          </button>
        </form>
      </div>
    </>
  );
}
