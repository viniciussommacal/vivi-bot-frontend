import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:4502'
});

http.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
);

export default http;
