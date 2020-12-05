import React from 'react';
import moxios from 'moxios';
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

jest.setTimeout(15000)

moxios.delay = 10;

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
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
      status: 200,
      response: [ {name: 'Four'} ]
    })
    wrapped = mount(
      <State initialState={initialState}>
        <CommentsList />
      </State>
    );
  });

  it('has four list items', (done) => {
    wrapped.update();
    moxios.wait(function () {
      expect(wrapped.find('div.comments-list__listItem').length).toBe(4);
      done();
    });
  });

  it('shows text on each list element', (done) => {
    wrapped.update();
    moxios.wait(function () {
      expect(wrapped.render().text()).toContain('One');
      expect(wrapped.render().text()).toContain('Two');
      expect(wrapped.render().text()).toContain('Three');
      expect(wrapped.render().text()).toContain('Four');
      done();
    });
  });

  afterEach(() => {
    wrapped.unmount();
    moxios.uninstall();
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
