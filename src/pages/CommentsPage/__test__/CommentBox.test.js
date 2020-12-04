import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import CommentBox from '../CommentBox';

Enzyme.configure({ adapter: new Adapter() })

it('will not crash', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CommentBox/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it ('has an TextField and Button', () => {
  const wrapped = shallow(<CommentBox/>);
  expect(wrapped.find(TextField).length).toEqual(1);
  expect(wrapped.find(Button).length).toEqual(1);
});
