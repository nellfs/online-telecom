import NavBar from '../Navbar';
import './index.css';

import TechBackground from '../../assets/images/tech_background.png';
import Image404 from '../../assets/images/404.png';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Page404 = () => {
  return (
    <>
      <NavBar solid={false} />
      <div className="main__404">
        <div className="container">
          <img className="background" src={TechBackground}></img>
          <div className="navbar__warning">
            <img className="image404" src={Image404} />
            <h1>PÁGINA NÃO ENCONTRADA!</h1>
            <Link to="/">
              <FontAwesomeIcon
                className="icon"
                icon={faArrowLeft}
              ></FontAwesomeIcon>{' '}
              VOLTAR
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar__footer">
        <Footer></Footer>
      </div>
    </>
  );
};

export default Page404;
