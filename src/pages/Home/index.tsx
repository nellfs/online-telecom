import BannerCarousel from "../../components/BannerCarousel";
import NavBar from "../../components/Navbar";
import PlanCard from "../../components/PlanCard";
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
        <div className="plans__container">
          <PlanCard
            speed={100}
            description={"fibra"}
            bonus={["tocalivros", "nordestefc", "bebanca"]}
            price={"79,90"}
          />
          <PlanCard
            speed={100}
            description={"fibra"}
            bonus={["tocalivros", "nordestefc", "bebanca"]}
            price={"79,90"}
            bonus_info={true}
          />
          <PlanCard
            speed={100}
            description={"fibra"}
            bonus={["tocalivros", "nordestefc", "bebanca"]}
            price={"79,90"}
            bonus_info={true}
          />
          <PlanCard
            speed={100}
            description={"fibra"}
            bonus={["tocalivros", "nordestefc", "bebanca"]}
            price={"79,90"}
            bonus_info={true}
          />
          <PlanCard
            speed={100}
            description={"fibra"}
            bonus={["tocalivros", "nordestefc", "bebanca"]}
            price={"79,90"}
          />
          <PlanCard
            speed={100}
            description={"fibra"}
            bonus={["tocalivros", "nordestefc", "bebanca"]}
            price={"79,90"}
            bonus_info={true}
          />
          <PlanCard
            speed={100}
            description={"fibra"}
            bonus={["tocalivros", "nordestefc", "bebanca"]}
            price={"79,90"}
            bonus_info={true}
          />
          <PlanCard
            speed={100}
            description={"fibra"}
            bonus={["tocalivros", "nordestefc", "bebanca", "deezer"]}
            price={"79,90"}
            bonus_info={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
