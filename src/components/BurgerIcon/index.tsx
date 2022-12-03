import { useState } from 'react';
import './index.css';

const BurguerIcon = () => {
  const [active, setActive] = useState('');
  const changeBar = () => {
    setActive(active == '' ? '-active' : '');
  };

  return (
    <button
      aria-label="burger menu"
      className="burgericon"
      onClick={() => changeBar()}
    >
      <div className={`burgerbar1${active}`} />
      <div className={`burgerbar2${active}`}></div>
      <div className={`burgerbar3${active}`}></div>
    </button>
  );
};

export default BurguerIcon;
