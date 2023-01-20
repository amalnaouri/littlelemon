import './App.css';
import Nav from './components/nav/Nav';
import HomePage from './pages/HomePage';
import About from './components/about/About';
import Menu from './pages/Menu';
import Reservations from './pages/Reservations';
import OrderOnline from './pages/OrderOnline';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
