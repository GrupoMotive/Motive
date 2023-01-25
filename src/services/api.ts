import axios from 'axios'

const api = axios.create({
  baseURL: 'https://motive.onrender.com/',
});

export default api;