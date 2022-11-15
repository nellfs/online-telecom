import "./index.css";
import ComboBannerImage from "../../../assets/images/combo-image-desktop.png";

const ComboBanner = () => {
  return (
    <div className="combo">
      <div className="container">
        <img src={ComboBannerImage} />
        <div className="combo__text">
          <h3>Monte seu combo</h3>
          <p>
            Combo de TV, internet e telefone para você com preços especiais!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComboBanner;
