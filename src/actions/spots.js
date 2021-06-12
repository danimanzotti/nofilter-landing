import api from '../api';

const getAll = () => {
  return api.spots.getAll();
};

export default {
  getAll,
};
