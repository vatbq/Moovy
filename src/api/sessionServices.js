import connection from './connection';

const requestNewToken = async () => {
  const response = await connection.get('/authentication/token/new');
  return response.data.request_token;
}

const getPermission = (requestToken) => {
  window.open(`https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=${process.env.REACT_APP_ENV}/approved`, '_blank');
}

export const getSessionId = async (requestToken) => {
  const response = await connection.post('/authentication/session/new?', { request_token: requestToken });
  return response.data.session_id;
}

export const getUserPermission = async () => {
  const requestToken = await requestNewToken();
  getPermission(requestToken);
}
