import axios from 'axios';

import Action from './types';

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
