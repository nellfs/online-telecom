import { useState } from 'react';
import './index.css';

interface IBurgerButton {
  onClick: () => void;
}

const BurgerButton = ({ onClick }: IBurgerButton) => {
  const [active, setActive] = useState('');
  const toggleButton = () => {
    setActive(active == '' ? '-active' : '');
  };

  return (
    <button
      aria-label="burger menu"
      className="burgericon"
      onClick={() => {
        toggleButton();
        onClick();
      }}
    >
      <div className={`burgerbar1${active}`} />
      <div className={`burgerbar2${active}`}></div>
      <div className={`burgerbar3${active}`}></div>
    </button>
  );
};

export default BurgerButton;
