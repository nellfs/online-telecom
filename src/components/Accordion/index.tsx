import './index.css';
import AngleIcon from '../AngleIcon';
import { useState } from 'react';
interface IAccordion {
  question: string;
  answer: string;
  active: boolean;
}

const Accordion = (props: IAccordion) => {
  const [active, setActive] = useState(props.active);

  const SwitchActive = () => {
    setActive(active ? false : true);
  };

  return (
    <div
      className="accordion"
      onClick={() => {
        SwitchActive();
      }}
    >
      <div className="accordion__question">
        {props.question}
        <AngleIcon active={active}></AngleIcon>
      </div>
      {active ? (
        <p className="accordion__answer">{props.answer}</p>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Accordion;
