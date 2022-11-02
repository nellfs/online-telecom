import Banners from "../../assets/banners/desktop/online_alimentos.png";
import "./index.css";

const Carousel = () => {
  return (
    <div className="carousel">
      <img src={Banners}></img>

      <img src={Banners}></img>
    </div>
  );
};

export default Carousel;
