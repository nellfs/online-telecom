import './index.css';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useToggle } from '../../hooks';

const EmailInput = () => {
  const [active, toggleActive] = useToggle();

  return (
    <div className="emailinput">
      <form>
        <input className="input" type="email" placeholder="E-mail"></input>
        <button>CADASTRAR</button>
      </form>
      <div className="confirmation" onClick={() => toggleActive()}>
        <FontAwesomeIcon
          icon={faCheck}
          className={`check${active ? '-active' : ''}`}
        ></FontAwesomeIcon>
        <div>Aceito receber e-mails de notícias.</div>
      </div>
    </div>
  );
};

export default EmailInput;
