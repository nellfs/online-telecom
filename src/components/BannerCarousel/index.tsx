import "./index.css";

import online_alimentos from "../../assets/banners/desktop/online_alimentos.png";
import online_combo from "../../assets/banners/desktop/online_combo.png";
import online_esportes from "../../assets/banners/desktop/online_esportes.png";
import online_leitura from "../../assets/banners/desktop/online_leitura.png";
import online_music from "../../assets/banners/desktop/online_music.png";
import online_video01 from "../../assets/banners/desktop/online_video01.png";
import online_video02 from "../../assets/banners/desktop/online_video02.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from "react-responsive-carousel";

const desktop_banners = [
  online_alimentos,
  online_combo,
  online_esportes,
  online_leitura,
  online_music,
  online_video01,
  online_video02,
];

const BannerCarousel = () => {
  return (
    <Carousel showStatus={false} autoPlay={true} interval={6000}>
      {desktop_banners.map((banner) => (
        <div>
          <img src={banner} alt="banner"></img>
        </div>
      ))}
    </Carousel>
  );
};

export default BannerCarousel;
