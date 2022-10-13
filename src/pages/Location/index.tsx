import "./index.css";

import online_icon from "../../assets/icon_onlinetelecom.png";
import Map from "../../components/Location/";

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
            <Map showOptions={true} />
          </b>
        </div>
      </div>
    </div>
  );
};

export default Location;
