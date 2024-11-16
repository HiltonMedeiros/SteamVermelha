import React, { createContext, useState, useEffect } from 'react';
import api from '../api';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await api.get('/games');
        setGames(response.data);
      } catch (error) {
        console.error('Erro ao buscar jogos:', error);
      }
    };

    fetchGames();
  }, []);

  return (
    <GameContext.Provider value={{ games }}>
      {children}
    </GameContext.Provider>
  );
};