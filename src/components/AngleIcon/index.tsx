import './index.css';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IAngle {
  active: boolean;
}

const AngleIcon = (props: IAngle) => {
  const getAngle = () => {
    return props.active ? 'up' : 'down';
  };

  return (
    <div className="angleicon">
      <FontAwesomeIcon
        className={`angledirection-${getAngle()}`}
        icon={faAngleDown}
      ></FontAwesomeIcon>
    </div>
  );
};
export default AngleIcon;
