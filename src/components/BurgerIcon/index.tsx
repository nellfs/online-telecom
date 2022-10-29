import { useState } from "react";
import "./index.css";

interface IBurguerIcon {
  onClick(): void;
}

const BurguerIcon = () => {
  const [active, setActive] = useState("");
  const changeBar = () => {
    setActive(active == "" ? "-active" : "");
  };

  return (
    <div className="burger__container">
      <button className="burgericon" onClick={() => changeBar()}>
        <div className={`burgerbar1${active}`} />
        <div className={`burgerbar2${active}`}></div>
        <div className={`burgerbar3${active}`}></div>
      </button>
    </div>
  );
};

export default BurguerIcon;
