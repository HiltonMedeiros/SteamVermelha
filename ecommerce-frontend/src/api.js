// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000', // URL do game_catalog_service
});

export const cartApi = axios.create({
  baseURL: 'http://localhost:8001', // URL do cart_service
});

export default api;