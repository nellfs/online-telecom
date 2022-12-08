import ReactDOM from 'react-dom';
import Button from '../../Buttons';
import DarkUserIcon from '../../../assets/icons/dark/user_icon.png';
import './index.css';

interface IMobileMenuModal {
  open?: boolean;
}

const openModal = {
  left: '0px'
};

const closeModal = {
  left: '100%'
};

const MobileMenuModal = ({ open = false }: IMobileMenuModal) => {
  if (!open) document.body.style.overflow = 'unset';
  else document.body.style.overflow = 'hidden';

  return ReactDOM.createPortal(
    <div className="mobile__navbar-modal" style={open ? openModal : closeModal}>
      {!open ? null : (
        <div style={{ color: 'white' }}>
          <ul className="list">
            <li>
              <a>Para você</a>
            </li>
            <li>
              <a>Para empresas</a>
            </li>
            <li>
              <a>Produtos e serviços</a>
            </li>
            <li>
              <a>Institucional</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <Button theme={'red'} className="red__button">
                Assine já
              </Button>
            </li>
            <li>
              <a>2ª Via</a>
            </li>
            <li>
              <Button theme="default" className="dark__button">
                <img src={DarkUserIcon}></img>
                Minha Online
              </Button>
            </li>
          </ul>
        </div>
      )}
    </div>,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById('mobile__menu-portal')!
  );
};

export default MobileMenuModal;
