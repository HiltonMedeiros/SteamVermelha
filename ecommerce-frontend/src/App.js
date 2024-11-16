import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameList from './components/GameList';
import GameDetail from './components/GameDetail';
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
        </Routes>
      </Router>
    </GameProvider>
  );
};

export default App;
