const parseResponse = r => {
  return new Promise(async (resolve, reject) => {
    if (!r.ok) {
      try {
        const text = await r.text();

        try {
          const json = JSON.parse(text);
          reject(json);
          return;
        } catch (error) {
          reject({ status: 'local-error', responseText: text, error });
          return;
        }
      } catch (error) {
        reject({ message: 'Unknown error (02)', error });
        return;
      }
    }

    try {
      const text = await r.text();
      try {
        const r = JSON.parse(text);

        if (r.status !== 'ok') {
          reject(r);
          return;
        } else {
          resolve(r);
          return;
        }
      } catch (error) {
        reject({ message: 'Unknown error (04)', error });
        return;
      }
    } catch (error) {
      reject({ message: 'Unknown error (05)', error });
      return;
    }
  });
};

export default {
  parseResponse,
  getHeaders: () => {
    return {
      Accept: 'application/json',
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
    };
  },
};
