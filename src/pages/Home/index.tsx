import BannerCarousel from "../../components/BannerCarousel";
import NavBar from "../../components/Navbar";
import useWindowWidth from "../../hooks/useWindowWidth";
import "./index.css";

const Home = () => {
  return (
    <div className="page-home">
      <NavBar />
      <BannerCarousel />
      <div className="plans">
        <div className="container">
          <div className="plans__header">
            <h3>Melhores ofertar para você</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
