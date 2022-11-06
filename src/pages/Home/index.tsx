import BannerCarousel from "../../components/BannerCarousel";
import NavBar from "../../components/Navbar";
import PlanCard from "../../components/PlanCard";
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
            <h3 className="plans__title">Melhores ofertas para você</h3>
            <div className="plans__subtitle">
              <p>
                Planos de Internet de ultravelocidade + Wi-Fi e instalação
                grátis
              </p>
              <a>Veja todos os planos</a>
            </div>
          </div>
        </div>
        <PlanCard speed={100} description={"fibra"}></PlanCard>
      </div>
    </div>
  );
};

export default Home;
