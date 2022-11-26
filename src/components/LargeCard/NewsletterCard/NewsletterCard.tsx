import './NewsletterCard.css';
import NewsletterImage from '../../../assets/images/newsletter-image.png';
import EmailInput from '../../EmailInput';

const NewsletterBanner = () => {
  return (
    <div className="newsletter">
      <div className="container">
        <div className="text">
          <img src={NewsletterImage} />
          <small>CLUBE ONLINE</small>
          <p>
            Assine nossa newsletter e{' '}
            <b>fique por dentro de todas as nossas ofertas!</b>
          </p>
        </div>
        <EmailInput></EmailInput>
      </div>
    </div>
  );
};

export default NewsletterBanner;
