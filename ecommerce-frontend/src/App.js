import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameList from './components/GameList';
import GameDetail from './components/GameDetail';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/Admin';
import { GameProvider } from './context/GameContext';
import Header from './components/Header';

const App = () => {
  return (
    <GameProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<GameList />} />
          <Route path="/games/:id" element={<GameDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </GameProvider>
  );
};

export default App;
