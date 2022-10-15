import "./index.css";
import SearchIcon from "../../src/assets/search_icon.png";

const LocationOptions = () => {
  return (
    <div className="location__options__container">
      <form className="location__options__selector">
        <div className="location__search">
          <img src={SearchIcon}></img>
          <input type="search" placeholder="Digite sua cidade"></input>
        </div>
      </form>
    </div>
  );
};

export default LocationOptions;
