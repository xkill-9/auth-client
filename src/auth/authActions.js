import axios from 'axios';
import { browserHistory } from 'react-router';

import { SERVER_URL } from '../constants';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_MESSAGE } from './authTypes';

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error,
  };
}

export function signInUser({ email, password }) {
  return function (dispatch) {
    axios.post(`${SERVER_URL}/signin`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/feature');
      })
      .catch(() => {
        dispatch(authError('Bad Login Info'));
      });
  };
}

export function signUpUser(email, password) {
  return function (dispatch) {
    axios.post(`${SERVER_URL}/signup`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/feature');
      })
      .catch(e => {
        dispatch(authError(e.response.data.error));
      });
  };
}

export function signOutUser() {
  localStorage.removeItem('token');
  return {
    type: UNAUTH_USER,
  };
}

export function fetchMessage() {
  return function (dispatch) {
    axios.get(`${SERVER_URL}/`,
      {
        headers: { authorization: localStorage.getItem('token') },
      })
      .then(response => {
        dispatch({ type: FETCH_MESSAGE, payload: response.data.message });
      });
  };
}
