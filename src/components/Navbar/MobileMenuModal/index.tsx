import ReactDOM from 'react-dom';
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
  if (!open) {
    document.body.style.overflow = 'unset';
  } else document.body.style.overflow = 'hidden';

  return ReactDOM.createPortal(
    <div className="mobile__navbar-modal" style={open ? openModal : closeModal}>
      {!open ? null : <div style={{ color: 'white' }}>Hello World</div>}
    </div>,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById('mobile__menu-portal')!
  );
};

export default MobileMenuModal;
