import './index.css';

interface HelpCard {
  icon: string;
  text: string;
}

const HelpItem = (props: HelpCard) => {
  return (
    <div className="help__item">
      <div className="help__item-container">
        <img src={props.icon}></img>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default HelpItem;
