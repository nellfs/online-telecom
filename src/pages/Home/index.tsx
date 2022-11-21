import BannerCarousel from '../../components/CarouselBanner';
import NavBar from '../../components/Navbar';
import PlanCard from '../../components/PlanCard';

import TelecoImage from '../../assets/images/bg_teleco_tv.png';

import './index.css';
import Banner from '../../components/LargeCard';
import FAQ from '../../components/FAQ';
import Contact from '../../components/Contact';

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
            description={'fibra'}
            bonus={['tocalivros', 'nordestefc', 'bebanca']}
            price={'79,90'}
          />
          <PlanCard
            speed={300}
            description={'fibra'}
            bonus={['tocalivros', 'nordestefc', 'bebanca']}
            price={'89,90'}
          />
          <PlanCard
            speed={300}
            description={'fibra'}
            bonus={['tocalivros', 'nordestefc', 'bebanca', 'deezer']}
            price={'99,90'}
            bonus_info={true}
          />
          <PlanCard
            speed={500}
            description={'fibra'}
            bonus={['tocalivros', 'nordestefc', 'bebanca', 'watchbr']}
            price={'109,90'}
          />
          <PlanCard
            speed={500}
            description={'fibra'}
            bonus={['tocalivros', 'nordestefc', 'bebanca', 'watchbr', 'deezer']}
            price={'119,90'}
            bonus_info={true}
          />
          <PlanCard
            speed={600}
            description={'fibra'}
            bonus={['tocalivros', 'nordestefc', 'bebanca', 'watchbr', 'hbomax']}
            price={'129,90'}
          />
          <PlanCard speed={5} description={'radio'} price={'59,90'} />
          <PlanCard speed={7} description={'radio'} price={'72,90'} />
          <PlanCard speed={10} description={'radio'} price={'84,90'} />
        </div>
      </div>

      <div className="new_services_container">
        <div className="text">
          <div>
            <h2>Novos serviços Online</h2>
            <p>
              Um mundo de possibilidades de entretenimento em vídeo que satisfaz
              os gostos de toda a família. Desde desenhos animados para a
              criançada, até o futebol de domingo.
            </p>
          </div>
          <div>
            <h2>Como Funciona?</h2>
            <p>
              Você pode conectar seus aparelhos como televisores, computadores e
              smartphones direto nos seus serviços preferidos e aproveitar as
              melhores soluções de entretenimento.
            </p>
          </div>
        </div>
        <img src={TelecoImage} alt="teleco assistindo tv" />
      </div>
      <Banner type="combo"></Banner>
      <section className="about-mode">
        <FAQ />
        <Contact />
      </section>
    </div>
  );
};

export default Home;
