const BASE_URL = 'https://run.mocky.io/v3/2d06d2c1-5a77-4ecd-843a-53247bcb0b94';

const processResponse = (res) => {
  return res.ok
    ? res.json()
    : Promise.reject(`${res.status} ${res.statusText}`);
};

export const getItems = () => {
  return fetch(BASE_URL, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
  }).then(processResponse);
};
