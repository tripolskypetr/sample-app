import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import CommentsList from '../CommentsList';
// import { CommentsList as CommentsListPure } from '../CommentsList';
import State from '../../../State';

Enzyme.configure({ adapter: new Adapter() })

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useLayoutEffect: jest.requireActual('react').useEffect,
}));

describe('creates one li per comment', () => {

  const initialState = {
    comments: [
      'One',
      'Two',
      'Three',
    ],
  };

  /** @type Enzyme.ReactWrapper<any, any> */
  let wrapped = null;

  beforeEach(() => {
    wrapped = mount(
      <State initialState={initialState}>
        <CommentsList />
      </State>
    );
  });

  it('has three list items', () => {
    expect(wrapped.find('div.comments-list__listItem').length).toEqual(3);
  })

  it('shows text on each list element', () => {
    expect(wrapped.render().text()).toContain('One');
    expect(wrapped.render().text()).toContain('Two');
    expect(wrapped.render().text()).toContain('Three');
  });

  afterEach(() => {
    wrapped.unmount()
  });

})

/*describe('works with shallow wrapper', () => {

    // @type Enzyme.ShallowWrapper<any, any>
    let wrapped = null;

    beforeEach(() => {
      wrapped = shallow(<CommentsListPure/>);
    });

    it('has three list item components', () => {
      //
      // <div className="comments-list__root">
      //   <WithStyles(ForwardRef(List)) />
      // </div>
      //
      console.log(wrapped.debug())
      expect(wrapped.find(ListItem).length).toEqual(3);
    });

    afterEach(() => {
      wrapped.unmount();
    })
  
});*/
