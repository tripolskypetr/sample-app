import Action from '../actions/types';

const initialState: string[] = [];

export const comments = (state = initialState, {type, payload}) => {
  switch (type) {
    case Action.SAVE_COMMENT: 
      const {comment} = payload;
      return state.concat(comment); // [...state, comment];
    default:
      return state;
  }
};

export default comments;
