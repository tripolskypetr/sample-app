import React from 'react';

import { observer } from 'mobx-react';
import { compose } from 'redux';
import { useStore } from 'react-redux';

export const Counter1 = () => {
  const {} = useStore()
  return (
    <p>Hello, world</p>
  );
};

export default compose(
  observer,
)(Counter1);
