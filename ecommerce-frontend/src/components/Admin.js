// src/components/Admin.js
import React, { useState, useEffect } from 'react';
import { api } from '../api'; // Importar api corretamente

function Admin() {
  const [games, setGames] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [genres, setGenres] = useState('');
  const [platforms, setPlatforms] = useState('');
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
      await api.post('/games', {
        title,
        description,
        price: parseFloat(price),
        genres: genres.split(',').map((genre) => genre.trim()),
        platforms: platforms.split(',').map((platform) => platform.trim()),
      });
      window.location.reload();
    } catch (error) {
      setError('Erro ao criar jogo');
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
          <label>Gêneros (separados por vírgula):</label>
          <input
            type="text"
            value={genres}
            onChange={(e) => setGenres(e.target.value)}
          />
        </div>
        <div>
          <label>Plataformas (separadas por vírgula):</label>
          <input
            type="text"
            value={platforms}
            onChange={(e) => setPlatforms(e.target.value)}
          />
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