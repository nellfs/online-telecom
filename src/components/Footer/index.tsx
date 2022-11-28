import './index.css';

import AndroidDownloadImage from '../../assets/getapp/google-play.png';
import IOSDownloadImage from '../../assets/getapp/apple-store.png';
import OnlineLogo from '../../assets/icons/icon_onlinetelecom_white.png';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
  faLinkedin,
  faFacebookF,
  faLinkedinIn
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
        <FontAwesomeIcon icon={icon} size={'lg'}></FontAwesomeIcon>
      </div>
    ));
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container__columns">
          <div className="footer-social_column">
            <div className="logo">
              <img src={OnlineLogo}></img>
              <p>Baixe o app Minha Online</p>
            </div>
            <div className="download">
              <img src={IOSDownloadImage}></img>
              <img src={AndroidDownloadImage}></img>
            </div>
            <div className="social-media">{getSocialIcons()}</div>
          </div>
          <div>test</div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
