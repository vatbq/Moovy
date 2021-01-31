import axios from 'axios';

const Connection = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  language: 'en-US',
});

Connection.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params.api_key = process.env.REACT_APP_API_KEY;
  return config;
});

export default Connection;
