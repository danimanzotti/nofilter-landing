import fetchUtils from './../utils/fetch';

  const baseUrl = 'https://storage.googleapis.com/mari-a5cc7.appspot.com';

const getAll = () => {
  return fetch(`${baseUrl}/spots/users-spots-v13.json`, {
    method: 'GET',
  }).then(fetchUtils.parseResponse);
};

export default {
  getAll,
};
