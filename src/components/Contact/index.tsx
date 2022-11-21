import './index.css';
import HelpItem from '../HelpItem';
import CallIcon from '../../assets/icons/call_icon.svg';
import ChatIcon from '../../assets/icons/chat_icon.svg';

const Contact = () => {
  return (
    <div className="contact">
      <small>Entre em contato</small>
      <h3>Precisa de ajuda?</h3>
      <div className="help__grid">
        <HelpItem icon={CallIcon} text="Ligue Agora"></HelpItem>
        <HelpItem icon={ChatIcon} text="Chat Online"></HelpItem>
      </div>
    </div>
  );
};

export default Contact;
