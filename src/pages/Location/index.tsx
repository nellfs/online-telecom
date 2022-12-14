import './index.css';

import OnlineIcon from '../../assets/icons/dark/onlinetelecom_icon.webp';
import Map from '../../components/Location/';

const Location = () => {
  return (
    <div className="location__main">
      <div className="location__white">
        <img className="online_icon" src={OnlineIcon} alt="Online Telecom" />
        <div className="location__white__main">
          <h2>Selecione seu estado</h2>
          <p>
            Chegou a sua vez de ser <b>ONLINE TELECOM!</b>
          </p>
        </div>
      </div>
      <div className="location__red">
        <Map />
      </div>
    </div>
  );
};

export default Location;
