import './index.css';
import DarkThemeIcon from '../../assets/icons/dark/theme_icon.png';
import LightThemeIcon from '../../assets/icons/light/theme_icon.png';
import LightChevronDownIcon from '../../assets/icons/light/chevrondown_icon.png';
import DarkChevronDownIcon from '../../assets/icons/dark/chevrondown_icon.png';
import LightOnlineIcon from '../../assets/icons/light/onlinetelecom_icon.webp';
import DarkOnlineIcon from '../../assets/icons/dark/onlinetelecom_icon.webp';
import LightUserIcon from '../../assets/icons/light/user_icon.png';
import DarkUserIcon from '../../assets/icons/dark/user_icon.png';
import Button from '../Buttons';
import location_finder from '../../utils/location_fixer.json';
import { Link, useParams } from 'react-router-dom';
import { Cities } from '../../types/map';
import { useEffect, useState } from 'react';
import BurguerIcon from '../BurgerIcon';
import { useTheme } from '../../contexts/Theme/ThemeContext';

const NavBar = () => {
  const [realCity, setRealCity] = useState<string>();
  const { city } = useParams<{ city: Cities }>(); // This is necessary because I'm not using a real API
  const { themeType, setCurrentTheme } = useTheme();

  const switchTheme = () => {
    if (themeType === 'light') return 'dark';
    return 'light';
  };

  useEffect(() => {
    if (city) setRealCity(location_finder[city]);
  }, [city]);

  return (
    <div className="main-navbar">
      <div className="navbar__block"></div>
      <div className="navbar">
        <div className="navbar__top">
          <div className="container__top">
            <div className="navbar__top-left">
              <div className="number-contact">0800 088 1111</div>
              <div>aA</div>
              <img
                src={themeType === 'light' ? DarkThemeIcon : LightThemeIcon}
                onClick={() => {
                  setCurrentTheme(switchTheme());
                }}
              ></img>
            </div>
            <div className="navbar__top-right">
              <div>{realCity}</div>
              <img
                src={
                  themeType === 'light'
                    ? DarkChevronDownIcon
                    : LightChevronDownIcon
                }
              ></img>
            </div>
          </div>
        </div>
        <div className="navbar__bottom">
          <div className="container__bottom">
            <div className="navbar__bottom-left">
              <div className="bottom__left">
                <Link to={'/'}>
                  <img
                    src={
                      themeType === 'light' ? DarkOnlineIcon : LightOnlineIcon
                    }
                    alt={'Online Telecom'}
                  ></img>
                </Link>
                <div className="bottom__left-options">
                  <a>PARA VOCÊ</a>
                  <a>PARA EMPRESAS</a>
                </div>
              </div>
              <div className="bottom__right">
                <div className="bottom__right-options">
                  <div>Produtos e serviços</div>
                  <div>Institucional</div>
                  <div>Blog</div>
                </div>
                <Button theme="red">Assine já</Button>
                <Button theme="outline">2ª Via</Button>
                <Button theme="default">
                  <img
                    src={themeType === 'light' ? LightUserIcon : DarkUserIcon}
                  ></img>
                  Minha Online
                </Button>
              </div>
              <div
                className="bottom__right-mobile"
                style={{ margin: 'auto 0' }}
              >
                <BurguerIcon></BurguerIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
