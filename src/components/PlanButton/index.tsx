import "./index.css";

import BonusBebanca from "../../assets/otts/bonus_bebanca.png";
import BonusDeezer from "../../assets/otts/bonus_deezer.png";
import BonusHBOMax from "../../assets/otts/bonus_hbomax.png";
import BonusNordesteFC from "../../assets/otts/bonus_nordestefc.png";
import BonusTocaLivros from "../../assets/otts/bonus_tocalivros.png";
import BonusWatchbr from "../../assets/otts/bonus_watchbr.png";

const BonusPlans = [
  BonusBebanca,
  BonusDeezer,
  BonusHBOMax,
  BonusNordesteFC,
  BonusTocaLivros,
  BonusWatchbr,
];

type BonusOptions =
  | "none"
  | "bebanca"
  | "deezer"
  | "hbomax"
  | "nordestefc"
  | "tocalivros"
  | "watchbr";

interface IPlanButton {
  bonusType: BonusOptions;
}

const BonusImage = (bonus: BonusOptions) => {
  switch (bonus) {
    case "bebanca":
      return BonusBebanca;
      break;
    case "deezer":
      return BonusDeezer;
      break;
    case "hbomax":
      return BonusHBOMax;
      break;
    case "nordestefc":
      return BonusNordesteFC;
      break;
    case "tocalivros":
      return BonusTocaLivros;
      break;
    case "watchbr":
      return BonusWatchbr;
      break;
    default:
      return "";
      break;
  }
};

const PlanButton = (props: IPlanButton) => {
  return (
    <div className="plan__button">
      <img src={BonusImage(props.bonusType)}></img>
    </div>
  );
};

export default PlanButton;
