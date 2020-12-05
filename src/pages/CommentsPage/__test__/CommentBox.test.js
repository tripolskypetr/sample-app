import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import CommentBox from '../CommentBox';

/**
 * Именнованный экспорт позволяет достучаться
 * компонента сферически и в вакуме
 */
import { CommentBox as CommentBoxPure } from '../CommentBox';

import State from '../../../State';

Enzyme.configure({ adapter: new Adapter() })

it('has a TextField and a Button', () => {
  const wrapped = shallow(<CommentBoxPure/>);
  expect(wrapped.find(TextField).length).toEqual(1);
  expect(wrapped.find(Button).length).toEqual(1);
  wrapped.unmount();
});

describe('textarea is working', () => {
  /** @type Enzyme.ReactWrapper<any, any, any> */
  let wrapped = null;
  beforeEach(() => {
    wrapped = mount(
      <State>
        <CommentBox/>
      </State>
    );
  });
  it('has a textarea where user can type in', () => {
    wrapped.find('textarea').simulate('change', {
      target: {
        value: 'Example comment',
      },
    });
    wrapped.update()
    expect(wrapped.find('textarea').prop('value')).toEqual('Example comment');
  });
  it('when form is submitted, textarea gets emptied', () => {
    wrapped.find('textarea').simulate('change', {
      target: {
        value: '123456789',
      },
    });
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('123456789');
    wrapped.find('button').simulate('click');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
  afterEach(() => {
    wrapped.unmount();
  });
});
