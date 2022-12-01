import Location from './pages/Location';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { useTheme } from './contexts/Theme/ThemeContext';
import React from 'react';

function App() {
  const { theme } = useTheme();
  return (
    <div className="main" style={{ ...theme } as React.CSSProperties}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Location></Location>}></Route>
          <Route path="/:city/para-voce" element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
