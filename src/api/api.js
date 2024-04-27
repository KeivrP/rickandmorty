import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api/';

export const API_URL = axios.create({
    baseURL: BASE_URL,
  });