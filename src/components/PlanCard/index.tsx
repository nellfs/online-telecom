import './index.css';
import PlanButton, { BonusOptions } from '../PlanButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from '@fortawesome/free-solid-svg-icons';

interface IPlanCard {
  speed: number;
  description: 'fibra' | 'radio';
  bonus?: BonusOptions[];
  price: string;
  bonus_info?: boolean;
}

const PlanCard = (props: IPlanCard) => {
  return (
    <div className="plan__card">
      <div className="plan__card-top">
        <h1>{props.speed} Mega</h1>
        <h2>
          {props.description === 'fibra'
            ? 'Internet fibra + aplicativos'
            : 'de internet rádio'}
        </h2>
      </div>
      <div className="plan__card-center">
        <div className="wifi-icon">
          <FontAwesomeIcon icon={faWifi} className="wifi-icon" />
          Wi-Fi
        </div>
        {props.bonus?.map((bonus, n) => {
          return <PlanButton key={n} bonusType={bonus}></PlanButton>;
        })}
        {props.bonus_info ? <span>Informações adicionais</span> : <div></div>}
      </div>
      <div className="plan__card-end">
        <div className="plan__card-bottom">
          <h1>R${props.price}</h1>
          <span>/mês</span>
        </div>
        <a>ASSINE JÁ!</a>
      </div>
    </div>
  );
};

export default PlanCard;
