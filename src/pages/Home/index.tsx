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
            speed={300}
            description={"fibra"}
            bonus={["tocalivros", "nordestefc", "bebanca"]}
            price={"89,90"}
          />
          <PlanCard
            speed={300}
            description={"fibra"}
            bonus={["tocalivros", "nordestefc", "bebanca", "deezer"]}
            price={"99,90"}
            bonus_info={true}
          />
          <PlanCard
            speed={500}
            description={"fibra"}
            bonus={["tocalivros", "nordestefc", "bebanca", "watchbr"]}
            price={"109,90"}
          />
          <PlanCard
            speed={500}
            description={"fibra"}
            bonus={["tocalivros", "nordestefc", "bebanca", "watchbr", "deezer"]}
            price={"119,90"}
            bonus_info={true}
          />
          <PlanCard
            speed={600}
            description={"fibra"}
            bonus={["tocalivros", "nordestefc", "bebanca", "watchbr", "hbomax"]}
            price={"129,90"}
          />
          <PlanCard speed={5} description={"radio"} price={"59,90"} />
          <PlanCard speed={7} description={"radio"} price={"72,90"} />
          <PlanCard speed={10} description={"radio"} price={"84,90"} />
          <PlanCard speed={14} description={"radio"} price={"99,90"} />
        </div>
      </div>
      update
    </div>
  );
};

export default Home;
