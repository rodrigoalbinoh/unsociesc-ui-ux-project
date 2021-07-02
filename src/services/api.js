import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://firebase-middleware-2.herokuapp.com',
});
