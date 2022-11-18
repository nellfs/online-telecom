import "./index.css";

import BonusBebanca from "../../assets/otts/bonus_bebanca.png";
import BonusDeezer from "../../assets/otts/bonus_deezer.png";
import BonusHBOMax from "../../assets/otts/bonus_hbomax.png";
import BonusNordesteFC from "../../assets/otts/bonus_nordestefc.png";
import BonusTocaLivros from "../../assets/otts/bonus_tocalivros.png";
import BonusWatchbr from "../../assets/otts/bonus_watchbr.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const BonusPlans = [
  BonusBebanca,
  BonusDeezer,
  BonusHBOMax,
  BonusNordesteFC,
  BonusTocaLivros,
  BonusWatchbr,
];

export type BonusOptions =
  | "none"
  | "bebanca"
  | "deezer"
  | "hbomax"
  | "nordestefc"
  | "tocalivros"
  | "watchbr";

export interface IPlanButton {
  bonusType: BonusOptions;
}

const BonusImage = (bonus: BonusOptions) => {
  switch (bonus) {
    case "bebanca":
      return BonusBebanca;
    case "deezer":
      return BonusDeezer;
    case "hbomax":
      return BonusHBOMax;
    case "nordestefc":
      return BonusNordesteFC;
    case "tocalivros":
      return BonusTocaLivros;
    case "watchbr":
      return BonusWatchbr;
    default:
      return "";
  }
};

const PlanButton = (props: IPlanButton) => {
  return (
    <div className="plan__button">
      <img src={BonusImage(props.bonusType)}></img>
      <FontAwesomeIcon
        icon={faCaretRight}
        className="caret-right"
        size={"xl"}
      />
    </div>
  );
};

export default PlanButton;
