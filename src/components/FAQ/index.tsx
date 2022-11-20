import Accordion from '../Accordion';
import './index.css';
const FAQ = () => {
  return (
    <div className="faq__title">
      <small>FAQ</small>
      <h3>Tire suas dúvidas</h3>
      <Accordion question={''} answer={''}></Accordion>
    </div>
  );
};

export default FAQ;
