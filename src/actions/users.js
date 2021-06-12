import api from '../api';

const get = async params => {
  const baseUrl = 'https://storage.googleapis.com/mari-a5cc7.appspot.com';
  const { data } = await api.users.get(params);

  if (data.user) {
    data.user.avatarUrl = `${baseUrl}/avatars/${data.user.id}.jpg`;
  }

  return data;
};

export default {
  get,
};
