import "./index.css";
import "../../fonts/Arlon/Arlon-Regular.ttf";

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
    </div>
  );
};

export default PlanCard;
