const apiConfig = {
  URL: 'https://mesto.nomoreparties.co/v1/cohort-55',
  HEADERS: {
    authorization: 'e00a1ab1-46c1-4239-9ab0-198fbc69965a',
    'Content-Type': 'application/json',
  },
  BASE_URL: 'https://auth.nomoreparties.co',
};

const handleResponse = (response) => {
  return response.ok
    ? response.json()
    : Promise.reject(`Ошибка: ${response.status}`);
};

export const getUserInfo = () => {
  return fetch(`${apiConfig.URL}/users/me`, {
    method: 'GET',
    headers: apiConfig.HEADERS,
  }).then(handleResponse);
};

export const setUserInfo = (data) => {
  return fetch(`${apiConfig.URL}/users/me`, {
    method: 'PATCH',
    headers: apiConfig.HEADERS,
    body: JSON.stringify({
      name: data.name,
      about: data.about,
    }),
  }).then(handleResponse);
};

export const getCards = () => {
  return fetch(`${apiConfig.URL}/cards`, {
    method: 'GET',
    headers: apiConfig.HEADERS,
  }).then(handleResponse);
};

export const addCard = (data) => {
  return fetch(`${apiConfig.URL}/cards`, {
    method: 'POST',
    headers: apiConfig.HEADERS,
    body: JSON.stringify({
      name: data.title,
      link: data.link,
    }),
  }).then(handleResponse);
};

export const deleteCard = (id) => {
  return fetch(`${apiConfig.URL}/cards/${id}`, {
    method: 'DELETE',
    headers: apiConfig.HEADERS,
  }).then(handleResponse);
};

const addLike = (id) => {
  return fetch(`${apiConfig.URL}/cards/${id}/likes`, {
    method: 'PUT',
    headers: apiConfig.HEADERS,
  }).then(handleResponse);
};

const deleteLike = (id) => {
  return fetch(`${apiConfig.URL}/cards/${id}/likes`, {
    method: 'DELETE',
    headers: apiConfig.HEADERS,
  }).then(handleResponse);
};

export const changeLikeCardStatus = (cardId, isLiked) => {
  return isLiked ? addLike(cardId) : deleteLike(cardId);
};

export const setAvatar = (data) => {
  return fetch(`${apiConfig.URL}/users/me/avatar`, {
    method: 'PATCH',
    headers: apiConfig.HEADERS,
    body: JSON.stringify({
      avatar: data.avatar,
    }),
  }).then(handleResponse);
};

export const checkToken = (token) => {
  return fetch(`${apiConfig.BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then(handleResponse);
};

export const login = (email, password) => {
  return fetch(`${apiConfig.BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(handleResponse);
};

export const register = (email, password) => {
  return fetch(`${apiConfig.BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(handleResponse);
};
