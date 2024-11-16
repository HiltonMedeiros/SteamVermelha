import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const GameListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  background-color: #121212;
`;

const GameCard = styled.div`
  width: 200px;
  margin: 15px;
  background-color: #1e1e1e;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  h2 {
    font-size: 1.1em;
    margin: 10px;
    color: #fff;
  }

  p {
    margin: 0 10px 10px 10px;
    color: #b3b3b3;
  }

  a {
    text-decoration: none;
  }
`;

const PriceTag = styled.p`
  font-weight: bold;
  color: #00b894;
`;

const GameList = () => {
  const { games } = useContext(GameContext);

  return (
    <GameListContainer>
      {games.map((game) => (
        <GameCard key={game.id}>
          <Link to={`/games/${game.id}`}>
            <img src={game.image_url} alt={game.title} />
            <h2>{game.title}</h2>
          </Link>
          <PriceTag>
            {game.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </PriceTag>
        </GameCard>
      ))}
    </GameListContainer>
  );
};

export default GameList;