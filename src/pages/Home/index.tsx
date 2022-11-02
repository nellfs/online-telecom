import BannerCarousel from "../../components/BannerCarousel";
import NavBar from "../../components/Navbar";
import useWindowWidth from "../../hooks/useWindowWidth";
import "./index.css";

const Home = () => {
  return (
    <>
      <NavBar />
      <BannerCarousel />
    </>
  );
};

export default Home;
