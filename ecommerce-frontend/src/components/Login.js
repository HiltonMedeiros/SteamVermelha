// src/components/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { authApi } from '../api';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authApi.post('/token', new URLSearchParams({
        username,
        password,
      }));
      localStorage.setItem('token', response.data.access_token);
      localStorage.setItem('username', username); // Armazenar o nome do usuário
      // Redirecionar ou atualizar a página
      window.location.href = '/';
    } catch (error) {
      setError('Credenciais inválidas');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
      </form>
      <p>Não tem uma conta? <Link to="/register">Cadastre-se aqui</Link></p>
    </div>
  );
}

export default Login;