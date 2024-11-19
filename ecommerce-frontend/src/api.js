// Exemplo usando Axios
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000', // Certifique-se de que a porta e o endereço estão corretos
});

export default api;