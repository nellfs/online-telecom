import './NewsletterCard.css';
import NewsletterImage from '../../../assets/images/newsletter-image.png';
import EmailInput from '../../EmailInput';

const NewsletterBanner = () => {
  return (
    <div className="newsletter">
      <div className="container">
        <div className="newsletter_text">
          <img src={NewsletterImage} />
          <small>CLUBE ONLINE</small>
          <p>
            Assine nossa newsletter e{' '}
            <b>fique por dentro de todas as nossas ofertas!</b>
          </p>
        </div>
        <div className="newsletter_emailinput">
          <EmailInput></EmailInput>
        </div>
      </div>
    </div>
  );
};

export default NewsletterBanner;
