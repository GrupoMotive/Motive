import axios from 'axios'

const api = axios.create({
  baseURL: 'https://motive-server.onrender.com/',
});

export default api;