import api from '../api';

const login = params => {
  return api.developers.login(params).then(r => r.data);
};

const register = params => {
  return api.developers.register(params).then(r => r.data);
};

export default {
  login,
  register,
};
