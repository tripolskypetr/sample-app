import Action from './types';

export const saveComment = (comment) => ({
  type: Action.SAVE_COMMENT,
  payload: {
    comment,
  },
});
