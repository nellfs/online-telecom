import Location from './pages/Location';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTheme } from './contexts/Theme/ThemeContext';
import React, { lazy, Suspense } from 'react';
import Loading from './components/Loading';

import allCities from '../src/utils/dummy_cities.json';

const Home = lazy(() => import('./pages/Home'));

function App() {
  const { theme, themeType } = useTheme();
  const scrollBar = themeType === 'light' ? 'white' : '#373435';
  document.documentElement.style.setProperty('--color-scrollbar', scrollBar);

  const CityRoute = () => {
    return allCities.cities.map((city, index) => {
      return (
        <Route
          key={index}
          path={`/${city}/para-voce`}
          element={
            <Suspense fallback={<Loading />}>
              <Home city={city}></Home>
            </Suspense>
          }
        ></Route>
      );
    });
  };

  return (
    <div
      className="main"
      style={
        {
          ...theme
        } as React.CSSProperties
      }
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Location />}></Route>
          {CityRoute()}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
