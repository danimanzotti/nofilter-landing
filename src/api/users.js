import config from './../config';
import fetchUtils from './../utils/fetch';

const get = ({ username }) => {
  const endpoint = 'basic';
  const headers = {
    ...fetchUtils.getHeaders(),
  };

  // const me = duix.get('user');

  // if (me) {
  //   headers.Authorization = `Bearer ${me.token}`;
  //   endpoint = 'full';
  // }

  return fetch(`${config.api.baseUrl}/landing/v1/user/get-by-username/${username}/${endpoint}`, {
    method: 'GET',
    headers,
  }).then(fetchUtils.parseResponse);
};

export default {
  get,
};
