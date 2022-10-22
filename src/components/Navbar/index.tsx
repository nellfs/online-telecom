import "./index.css";
import ThemeIcon from "../../assets/icons/theme_icon.png";
import ChevronDownIcon from "../../assets/utils/chevrondown_icon.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__top-left">
          <div className="number-contact">0800 088 1111</div>
          <div>aA</div>
          <img src={ThemeIcon}></img>
        </div>
        <div className="navbar__top-right">
          <div>Varjota-CE</div>
          <img src={ChevronDownIcon}></img>
        </div>
      </div>{" "}
    </div>
  );
};

export default NavBar;
