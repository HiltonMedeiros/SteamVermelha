import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';

const GameDetail = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await api.get(`/games/${id}`);
        setGame(response.data);
      } catch (error) {
        console.error('Erro ao buscar detalhes do jogo:', error);
      }
    };

    fetchGame();
  }, [id]);

  if (!game) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>{game.title}</h1>
      <p>{game.description}</p>
      <p>Preço: ${game.price}</p>
      <img src={game.image_url} alt={game.title} />
      <p>Gêneros: {game.genres.join(', ')}</p>
      <p>Plataformas: {game.platforms.join(', ')}</p>
    </div>
  );
};

export default GameDetail;