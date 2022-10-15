import "./index.css";

import OnlineIcon from "../../assets/icon_onlinetelecom.png";
import Map from "../../components/Location/";
import LocationOptions from "../../LocationOptions";

const Location = () => {
  return (
    <div className="location__main">
      <div className="location__white">
        <img className="online_icon" src={OnlineIcon} />
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
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Location;
