import "./index.css";

import online_icon from "../../assets/icon_onlinetelecom.png";
import map from "../../assets/map.svg";

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
          <img src={map} style={{}}></img>
        </div>
      </div>
    </div>
  );
};

export default Location;
