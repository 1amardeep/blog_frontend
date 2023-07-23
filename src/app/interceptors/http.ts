import axios from 'axios';
import { environment } from '../../environments/environment';

const api = axios.create({
  baseURL: environment.apiUrl,
  headers: {
    // Authorization: 'Bearer your_access_token',
    'Content-Type': 'application/json',
  },
});

export default api;
