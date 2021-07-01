import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://firebase-middleware-2.herokuapp.com',
});
