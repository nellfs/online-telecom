import './index.css';

interface IBurgerButton {
  onClick: () => void;
  open: boolean;
}

const BurgerButton = ({ onClick, open }: IBurgerButton) => {
  const getActive = () => (open ? '-active' : '');

  return (
    <button
      aria-label="burger menu"
      className="burgericon"
      onClick={() => {
        onClick();
      }}
    >
      <div className={`burgerbar1${getActive()}`} />
      <div className={`burgerbar2${getActive()}`}></div>
      <div className={`burgerbar3${getActive()}`}></div>
    </button>
  );
};

export default BurgerButton;
