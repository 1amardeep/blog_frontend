import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    // Authorization: 'Bearer your_access_token',
    'Content-Type': 'application/json',
  },
});

export default api;
