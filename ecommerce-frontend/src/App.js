import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameList from './components/GameList';
import GameDetail from './components/GameDetail';
import Header from './components/Header';
import { GameProvider } from './context/GameContext';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';

const App = () => {
  return (
    <GameProvider>
      <CartProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<GameList />} />
            <Route path="/games/:id" element={<GameDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </CartProvider>
    </GameProvider>
  );
};

export default App;
