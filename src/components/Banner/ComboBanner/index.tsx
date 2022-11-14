import "./index.css";
import ComboBannerImage from "../../../assets/images/combo-image-desktop.png";

const ComboBanner = () => {
  return (
    <div className="combo">
      <div className="container">
        <img src={ComboBannerImage}></img>
      </div>
    </div>
  );
};

export default ComboBanner;
