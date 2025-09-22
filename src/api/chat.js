import http from '../services/http';

export async function startConversation(payload) {
  return http.post('/startConversation', payload);
}

export async function talk(payload) {
  return http.post('/talk', payload);
}
