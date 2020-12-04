import React from 'react';
import ReactDOM from 'react-dom';

import CommentsList from '../CommentsList';

it('will not crash', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CommentsList/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
