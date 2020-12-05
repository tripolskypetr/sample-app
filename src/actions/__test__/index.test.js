import Action from '../types';
import * as actions from '../index';

describe('saveComment', () => {

  it('has correct type', () => {
    const action = actions.saveComment();
    expect(action.type).toEqual(Action.SAVE_COMMENT);
  });

  it('has correct payload', () => {
    const action = actions.saveComment('omg');
    expect(action.payload).toEqual({comment: 'omg'});
  });

});
