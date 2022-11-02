import "./index.css";

import online_alimentos_d from "../../assets/banners/desktop/online_alimentos.png";
import online_combo_d from "../../assets/banners/desktop/online_combo.png";
import online_esportes_d from "../../assets/banners/desktop/online_esportes.png";
import online_leitura_d from "../../assets/banners/desktop/online_leitura.png";
import online_music_d from "../../assets/banners/desktop/online_music.png";
import online_video01_d from "../../assets/banners/desktop/online_video01.png";
import online_video02_d from "../../assets/banners/desktop/online_video02.png";

import online_alimentos_m from "../../assets/banners/mobile/online_alimentos.png";
import online_combo_m from "../../assets/banners/mobile/online_combo.png";
import online_esportes_m from "../../assets/banners/mobile/online_esportes.png";
import online_leitura_m from "../../assets/banners/mobile/online_leitura.png";
import online_music_m from "../../assets/banners/mobile/online_music.png";
import online_video01_m from "../../assets/banners/mobile/online_video01.png";
import online_video02_m from "../../assets/banners/mobile/online_video02.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from "react-responsive-carousel";
import { useEffect, useRef, useState } from "react";

const desktop_banners = [
  online_alimentos_d,
  online_combo_d,
  online_esportes_d,
  online_leitura_d,
  online_music_d,
  online_video01_d,
  online_video02_d,
];

const mobile_banners = [
  online_alimentos_m,
  online_combo_m,
  online_esportes_m,
  online_leitura_m,
  online_music_m,
  online_video01_m,
  online_video02_m,
];

const BannerCarousel = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const initial_banner = windowWidth < 650 ? mobile_banners : desktop_banners;
  const banner = useRef(initial_banner);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    if (window.innerWidth < 650) banner.current = mobile_banners;
    else banner.current = desktop_banners;
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Carousel
      className="carousel"
      showStatus={false}
      autoPlay={true}
      interval={6000}
      infiniteLoop={true}
      showThumbs={false}
      emulateTouch={true}
      renderIndicator={(clickHandler, isSelected, index, label) => {
        const dot = {
          width: "12px",
          height: "12px",
          borderRadius: "100%",
          margin: "0px 5px",
          background: "transparent",
          border: "1px white solid",
          cursor: "pointer",
          transition: "background 0.2s ease",
        };

        const selectedDot = {
          ...dot,
          background: "white",
        };

        const style = isSelected ? selectedDot : dot;

        return (
          <div style={{ display: "inline-flex" }}>
            <span onClick={clickHandler} style={style}></span>
          </div>
        );
      }}
    >
      {banner.current.map((banner_img, n) => (
        <div key={n} className="carousel__item">
          <img src={banner_img} alt="banner"></img>
        </div>
      ))}
    </Carousel>
  );
};

export default BannerCarousel;
