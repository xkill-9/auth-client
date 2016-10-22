import axios from 'axios';
import { browserHistory } from 'react-router';

import { SERVER_URL } from '../constants';

export function signInUser({ email, password }) {
  return function (dispatch) {
    axios.post(`${SERVER_URL}/signin`, { email, password })
      .then(response => {
        browserHistory.push('/feature');
      })
      .catch(() => {

      });
  };
}
