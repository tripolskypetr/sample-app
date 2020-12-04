import React from 'react';
import ReactDOM from 'react-dom';
import Scaffold from './Scaffold';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Scaffold/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
