// import duix from 'duix';
import config from './../config';
import fetchUtils from './../utils/fetch';

const login = params => {
  // const me = duix.get('user');

  return fetch(`${config.api.baseUrl}/api/v1/developers/login`, {
    method: 'POST',
    headers: {
      ...fetchUtils.getHeaders(),
      // Authorization: `Bearer ${me.token}`,
    },
    body: JSON.stringify(params),
  }).then(fetchUtils.parseResponse);
};

const register = params => {
  // const me = duix.get('user');

  return fetch(`${config.api.baseUrl}/api/v1/developers/register`, {
    method: 'POST',
    headers: {
      ...fetchUtils.getHeaders(),
      // Authorization: `Bearer ${me.token}`,
    },
    body: JSON.stringify(params),
  }).then(fetchUtils.parseResponse);
};

export default {
  login,
  register,
};
