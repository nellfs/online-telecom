import Location from './pages/Location';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/online-telecom" element={<Location></Location>}></Route>
        <Route
          path="/online-telecom/:city/para-voce"
          element={<Home></Home>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
