import axios from 'axios';

import Action from './types';

const WILL_AUTH = false;

export const saveComment = (comment) => ({
  type: Action.SAVE_COMMENT,
  payload: {
    comment,
  },
});

export const fetchComments = () => ({
  type: Action.FETCH_COMMENTS,
  payload: axios.get('http://jsonplaceholder.typicode.com/comments'),
});

export const authUser = ({login, password}, fallback) => (dispatch) => {
  console.log({login, password})
  // axios.post('https://127.0.0.1:4200/api/v1/auth', {login, password})
  if (WILL_AUTH) {
    dispatch({
      type: Action.AUTH_USER,
      token: 'AMAZING_TOKEN',
    });
  } else {
    fallback({
      error: 'invalid login',
    });
  }
};

export * as types from './types';
