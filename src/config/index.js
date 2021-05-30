const baseUrl =
  window.location.hostname === 'localhost'
    ? 'http://localhost:5000/mari-a5cc7/us-central1'
    : `https://us-central1-mari-a5cc7.cloudfunctions.net`;

export default {
  api: {
    baseUrl,
  },
};
