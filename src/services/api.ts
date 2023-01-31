import axios from 'axios'

const api = axios.create({
  baseURL: 'https://motive.onrender.com/',
});


/* const api = axios.create({
  baseURL: 'http://localhost:4000/',
});
 */

export default api;