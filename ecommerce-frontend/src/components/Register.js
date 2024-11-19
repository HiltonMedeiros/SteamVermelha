// src/components/Register.js
import React, { useState } from 'react';
import { authApi } from '../api';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authApi.post('/users/', {
        username,
        password,
      });
      setSuccess('Usuário cadastrado com sucesso!');
      setError('');
    } catch (error) {
      setError('Erro ao cadastrar usuário');
      setSuccess('');
    }
  };

  return (
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
      {success && <p>{success}</p>}
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default Register;