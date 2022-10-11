import "./index.css";

import online_icon from "../../assets/icon_onlinetelecom.png";
import map from "../../assets/map.svg";
import Map from "../../components/Map/map";

const Location = () => {
  return (
    <div className="location__main">
      <div className="location__left">
        <img className="online_icon" src={online_icon} />
        <div className="location__left__main">
          <h2>Selecione seu estado</h2>
          <p>
            Chegou a sua vez de ser{" "}
            <a>
              <b>ONLINE TELECOM!</b>
            </a>
          </p>
        </div>
      </div>
      <div className="location__right">
        <div className="location__map">
          {/* the original doesn't have a centered map, I'm decentering to match*/}
          <b>
            <Map />
          </b>
        </div>
      </div>
    </div>
  );
};

export default Location;
