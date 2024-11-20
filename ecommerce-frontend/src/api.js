// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',  // Base URL para o serviço de catálogo de jogos
});

const authApi = axios.create({
  baseURL: 'http://localhost:8001',  // Base URL para o serviço de autenticação
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      // Verifique se o token está correto e não contém caracteres indesejados
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

authApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export { api, authApi };