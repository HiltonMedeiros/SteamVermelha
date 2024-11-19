import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';
import styled from 'styled-components';

const GameDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #121212;
  color: #fff;
`;

const GameImage = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

const GameTitle = styled.h1`
  font-size: 2.5em;
  margin-bottom: 10px;
`;

const GamePrice = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  color: #00b894;
  margin-bottom: 20px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
`;

const GenresPlatforms = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const Tag = styled.span`
  background-color: #2c2c2c;
  color: #fff;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 15px;
  font-size: 0.9em;
`;

const GameDescription = styled.p`
  font-size: 1.2em;
  line-height: 1.5;
  text-align: center;
`;

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
    <GameDetailContainer>
      <GameImage src={game.image_url} alt={game.title} />
      <GameTitle>{game.title}</GameTitle>
      <GamePrice>
        {game.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </GamePrice>
      <InfoContainer>
        <GenresPlatforms>
          {game.genres.map((genre, index) => (
            <Tag key={`genre-${index}`}>{genre}</Tag>
          ))}
          {game.platforms.map((platform, index) => (
            <Tag key={`platform-${index}`}>{platform}</Tag>
          ))}
        </GenresPlatforms>
        <GameDescription>{game.description}</GameDescription>
      </InfoContainer>
    </GameDetailContainer>
  );
};

export default GameDetail;