import Location from './pages/Location';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTheme } from './contexts/Theme/ThemeContext';
import React, { lazy, Suspense } from 'react';
import Loading from './components/Loading';

const Home = lazy(() => import('./pages/Home'));

function App() {
  const { theme, themeType } = useTheme();
  const scrollBar = themeType === 'light' ? 'white' : '#373435';
  document.documentElement.style.setProperty('--color-scrollbar', scrollBar);

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
          <Route path="/online-telecom/" element={<Location />}></Route>
          <Route
            path="/online-telecom/:city/para-voce"
            element={
              <Suspense fallback={<Loading />}>
                <Home></Home>
              </Suspense>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
