import "./index.css";

import online_icon from "../../assets/icon_onlinetelecom.png";
import map from "../../assets/map.svg";
import Map from "../../components/Map/map";

const Location = () => {
  return (
    <div className="location__main">
      <div className="location__white">
        <img className="online_icon" src={online_icon} />
        <div className="location__white__main">
          <h2>
            Selecione seu estado
            <p>
              Chegou a sua vez de ser{" "}
              <a>
                <b>ONLINE TELECOM!</b>
              </a>
            </p>
          </h2>
        </div>
      </div>
      <div className="location__red">
        <div className="location__map">
          <b>
            <Map widht={"100%"} height={"100%"} />
          </b>
        </div>
      </div>
    </div>
  );
};

export default Location;
