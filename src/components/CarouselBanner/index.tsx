import "./index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from "react-responsive-carousel";
import { desktop_banner, mobile_banner } from "../../utils/banners";
import useWindowWidth from "../../hooks/useWindowWidth";

const CarouselBanner = () => {
  const banner =
    useWindowWidth() >= 580 ? desktop_banner.banners : mobile_banner.banners;

  return (
    <Carousel
      className="carousel"
      showStatus={false}
      autoPlay={true}
      interval={6000}
      infiniteLoop={true}
      showThumbs={false}
      emulateTouch={true}
      showArrows={false}
      preventMovementUntilSwipeScrollTolerance={true}
      swipeScrollTolerance={50}
      renderIndicator={(clickHandler, isSelected) => {
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
      {banner.map((banner_img, n) => (
        <div key={n}>
          <img src={banner_img} alt="banner"></img>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselBanner;
