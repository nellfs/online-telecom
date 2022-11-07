import "./index.css";
import "../../fonts/Arlon/Arlon-Bold.ttf";
import WifiIcon from "../../assets/icons/wifi_icon.png";

interface IPlanCard {
  speed: number;
  description: "fibra" | "radio";

  bonus?: {
    tocalivros?: true;
    nordesteFC?: true;
    bebanca?: true;
    deezer?: true;
    watchbr?: true;
  };
}

const PlanCard = (props: IPlanCard) => {
  return (
    <div className="plan__card">
      <div className="plan__card-top">
        <h1>{props.speed} Mega</h1>
        <h2>
          {props.description === "fibra"
            ? "Internet fibra + aplicativos"
            : "de internet rádio"}
        </h2>
      </div>
      <div className="wifi-icon">
        <img src={WifiIcon} className="wifi-icon"></img> Wi-Fi
      </div>
    </div>
  );
};

export default PlanCard;
