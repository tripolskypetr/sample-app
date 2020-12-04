import React from 'react';
import Enzyme, { shallow, render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import CommentBox from '../CommentBox';
import CommentsPage from '../CommentsPage';

Enzyme.configure({ adapter: new Adapter() })

let wrapped;

beforeEach(() => {
  wrapped = shallow(<CommentsPage />);
});

/**
 * shallow - 1 уровень вложенности
 */
it('Shows a ComponentBox (shallow)', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1); // toEqual это ===, toBe это ==
});

/**
 * render - осуществляет рендеринг и возвращает html
 */
// it('Shows a ComponentList (render)', () => {
//  const wrapped = render(<CommentsPage />);
//  expect(wrapped.find('.component-list__root')).toBeTruthy();
// });
