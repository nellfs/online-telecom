import './index.css';
import SearchIcon from '../../../assets/icons/search_icon.png';
import locations_data from '../../../utils/dummy_locations.json';
import { MapStates } from '../../../types/map';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface IMap {
  state: MapStates;
}

const LocationOptions = (currentState: IMap) => {
  const [searchLocation, setSearchLocation] = useState('');

  const getCities = () => {
    const cities = locations_data.states[currentState.state]
      .filter((val: string) => {
        if (searchLocation == '') return val;
        if (val.toLowerCase().includes(searchLocation.toLowerCase()))
          return val;
      })
      .map((cities: string, n: number) => {
        const normalized_city = cities
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/ /g, '-');
        return (
          <Link
            key={n}
            to={`${normalized_city.toLowerCase()}` + '/para-voce'}
            style={{ textDecoration: 'none' }}
          >
            <li>
              {cities} - {currentState.state}
            </li>
          </Link>
        );
      });
    return cities;
  };

  return (
    <div className="location__options__container">
      <form className="location__options__selector">
        <div className="location__search">
          <img src={SearchIcon}></img>
          <input
            onChange={(e) => {
              setSearchLocation(() => e.target.value);
            }}
            type="search"
            placeholder="Digite sua cidade"
          ></input>
        </div>
        <ul className="location__options">{getCities()}</ul>
      </form>
    </div>
  );
};

export default LocationOptions;
