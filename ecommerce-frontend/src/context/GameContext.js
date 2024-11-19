import React, { createContext, useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';
import { api } from '../api'; // Importar api corretamente

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchGames = async (term) => {
      try {
        const response = await api.get('/games', {
          params: { search_term: term },
        });
        setGames(response.data);
      } catch (error) {
        console.error('Erro ao buscar jogos:', error);
      }
    };

    // Função debounce
    const debouncedFetchGames = debounce(fetchGames, 500);
    debouncedFetchGames(searchTerm);

    // Limpar o debounce ao desmontar
    return () => {
      debouncedFetchGames.cancel();
    };
  }, [searchTerm]);

  return (
    <GameContext.Provider value={{ games, setSearchTerm }}>
      {children}
    </GameContext.Provider>
  );
};