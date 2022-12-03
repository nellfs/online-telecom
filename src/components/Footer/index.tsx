import './index.css';

import AndroidDownloadImage from '../../assets/getapp/google-play.webp';
import IOSDownloadImage from '../../assets/getapp/apple-store.webp';
import OnlineLogo from '../../assets/icons/light/onlinetelecom_icon.webp';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faTwitter,
  faYoutube,
  faFacebookF,
  faLinkedinIn,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  const SocialIcons = [
    faFacebookF,
    faInstagram,
    faTwitter,
    faYoutube,
    faEnvelope,
    faLinkedinIn
  ];

  const getSocialIcons = () => {
    return SocialIcons.map((icon, n) => (
      <div className="social-icon" key={n}>
        <FontAwesomeIcon
          icon={icon}
          size={'lg'}
          className="icon"
        ></FontAwesomeIcon>
      </div>
    ));
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container__columns">
          <div className="footer-social_column">
            <div className="logo">
              <img src={OnlineLogo} alt="Online Logo"></img>
              <p>Baixe o app Minha Online</p>
            </div>
            <div className="download">
              <img src={IOSDownloadImage} alt="IOS Download"></img>
              <img src={AndroidDownloadImage} alt="Android Download"></img>
            </div>
            <div className="social-media">{getSocialIcons()}</div>
          </div>
          <div className="footer-options__container">
            <ul className="footer-institutional_column">
              <h2>Institucional</h2>
              <li>Minha online</li>
              <li>Regulamentos</li>
              <li>Trabalhe Conosco</li>
              <li>Contato</li>
              <li>Endereços</li>
            </ul>
          </div>
          <div className="footer-options__container">
            <ul className="footer-institutional_column">
              <h2>FAQ</h2>
              <li>Blog</li>
              <li>RQUAL</li>
              <li>Revendedores Autorizados</li>
            </ul>
          </div>
          <div className="footer-options__container">
            <ul className="footer-institutional_column">
              <h2>Regulamental</h2>
              <li>Código de defesa do consumidor</li>
              <li>Ouvidoria</li>
              <li>Portal da Privacidade</li>
            </ul>
          </div>
          <div className="footer-contact_column">
            <div className="footer-contact_item">
              <a>0800 088 1111</a>
            </div>
            <div className="footer-contact_item">
              <a>2ª Via</a>
            </div>
            <div className="footer-contact_item">
              <a>falecom@online.net.br</a>
            </div>
          </div>
        </div>
        <div className="footer-container__copyrights">
          <div className="copyright">
            Todos os direitos reservados © Online Telecom
          </div>
          <a href="https://github.com/nellfs/online-telecom">
            <FontAwesomeIcon
              icon={faGithub}
              size={'xl'}
              style={{ margin: '0 5px' }}
            ></FontAwesomeIcon>
            Source-Code
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
