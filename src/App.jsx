import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Coins from './components/Coins';
import Exchanges from './components/Exchanges';
import CoinDetails from './components/CoinDetails';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/coins" element={<Coins />}></Route>
        <Route path="/exchanges" element={<Exchanges />}></Route>
        <Route path="/coins/:id" element={<CoinDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
