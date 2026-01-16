const isLocalhost =
  typeof window !== 'undefined' &&
  (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

export const API_BASE = isLocalhost
  ? 'http://localhost:8080/api'
  : 'https://ristorante-backend-8awh.onrender.com/api';
