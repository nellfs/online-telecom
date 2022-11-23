import './NewsletterCard.css';
import NewsletterImage from '../../../assets/images/newsletter-image.png';

const NewsletterBanner = () => {
  return (
    <div className="newsletter">
      <div className="container">
        <img src={NewsletterImage} />
        <div className="text">
          <small>CLUBE ONLINE</small>
          <p>
            Assine nossa newsletter e{' '}
            <b>fique por dentro de todas as nossas ofertas!</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterBanner;
