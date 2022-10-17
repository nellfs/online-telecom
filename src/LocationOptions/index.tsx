import "./index.css";
import SearchIcon from "../../src/assets/search_icon.png";
import locations_data from "../utils/dummy_locations.json";
import { MapStates } from "../types/map";
import { useEffect } from "react";

interface IMap {
  state: MapStates;
}

const LocationOptions = (currentState: IMap) => {
  const locations_string = JSON.stringify(locations_data);
  const locations = JSON.parse(locations_string);

  const getCities = () => {
    const cities = locations.states[currentState.state].map(
      (cities: string, n: number) => {
        return (
          <li key={n}>
            {cities} - {currentState.state}
          </li>
        );
      }
    );
    return cities;
  };

  return (
    <div className="location__options__container">
      <form className="location__options__selector">
        <div className="location__search">
          <img src={SearchIcon}></img>
          <input type="search" placeholder="Digite sua cidade"></input>
        </div>
        {/* {locations.states[`${currentState.state}`]} */}
        <ul className="location__options">
          <a>{getCities()}</a>
        </ul>
      </form>
    </div>
  );
};

export default LocationOptions;