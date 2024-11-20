// src/components/Admin.js
import React, { useState, useEffect } from 'react';
import { api } from '../api';

const genresEnum = [
  "Ação", "Aventura", "Terror", "Luta", "RPG", "Esportes", "Estratégia", "Quebra-cabeça", "Tiro", "Multijogador", "Online", "MOBA", "Grátis"
];

const platformsEnum = [
  "PC", "PS4", "PS5", "Xbox One", "Xbox Series X", "Nintendo Switch"
];

function Admin() {
  const [games, setGames] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [genres, setGenres] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [error, setError] = useState('');

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

  const handleCreateGame = async (e) => {
    e.preventDefault();
    try {
      console.log('Dados enviados:', {
        title,
        description,
        price: parseFloat(price),
        image_url: imageUrl,
        genres,
        platforms,
      });
      await api.post('/games', {
        title,
        description,
        price: parseFloat(price),
        image_url: imageUrl,
        genres,
        platforms,
      });
      window.location.reload();
    } catch (error) {
      console.error('Erro ao criar jogo:', error.response || error.message);
      setError('Erro ao criar jogo: ' + (error.response?.data?.detail || error.message));
    }
  };

  const handleDeleteGame = async (id) => {
    try {
      await api.delete(`/games/${id}`);
      setGames(games.filter((game) => game.id !== id));
    } catch (error) {
      console.error('Erro ao deletar jogo:', error);
    }
  };

  const handleCheckboxChange = (e, setState, state) => {
    const { value, checked } = e.target;
    if (checked) {
      setState([...state, value]);
    } else {
      setState(state.filter((item) => item !== value));
    }
  };

  return (
    <div>
      <h1>Administração de Jogos</h1>
      <form onSubmit={handleCreateGame}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Descrição:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Preço:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label>URL da Imagem:</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div>
          <label>Gêneros:</label>
          {genresEnum.map((genre) => (
            <div key={genre}>
              <input
                type="checkbox"
                value={genre}
                onChange={(e) => handleCheckboxChange(e, setGenres, genres)}
              />
              <label>{genre}</label>
            </div>
          ))}
        </div>
        <div>
          <label>Plataformas:</label>
          {platformsEnum.map((platform) => (
            <div key={platform}>
              <input
                type="checkbox"
                value={platform}
                onChange={(e) => handleCheckboxChange(e, setPlatforms, platforms)}
              />
              <label>{platform}</label>
            </div>
          ))}
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Criar Jogo</button>
      </form>
      <h2>Lista de Jogos</h2>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            {game.title} - {game.price}
            <button onClick={() => handleDeleteGame(game.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;