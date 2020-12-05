import commentsReducer from '../comments';
import Action from '../../actions/types';

it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: Action.SAVE_COMMENT,
    payload: {
      comment: 'Hello, world',
    },
  };
  const newState = commentsReducer([], action);
  expect(newState).toEqual(['Hello, world']);
});

it('handles the unknown type', () => {
  const newState = commentsReducer([], {type: 'fsdfsdfdsfd'});
  expect(newState.length).toEqual(0);
});
