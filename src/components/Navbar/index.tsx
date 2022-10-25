import "./index.css";
import ThemeIcon from "../../assets/icons/theme_icon.png";
import ChevronDownIcon from "../../assets/utils/chevrondown_icon.png";
import OnlineIcon from "../../assets/icons/icon_onlinetelecom.png";
import Button from "../Buttons";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__top">
        <div className="container__top">
          <div className="navbar__top-left">
            <div className="number-contact">0800 088 1111</div>
            <div>aA</div>
            <img src={ThemeIcon}></img>
          </div>
          <div className="navbar__top-right">
            <div>Varjota-CE</div>
            <img src={ChevronDownIcon}></img>
          </div>
        </div>
      </div>
      <div className="navbar__bottom">
        <div className="container__bottom">
          <img src={OnlineIcon}></img>
          <div className="navbar__bottom-left">
            <div className="bottom__left">
              <a>PARA VOCÊ</a>
              <a>PARA EMPRESAS</a>
            </div>
            <div className="bottom__right">
              <Button>Minha Online</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
