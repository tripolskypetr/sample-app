import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';

const createAppStore = (initialState) => createStore(reducers, initialState);

interface IStateProps {
  children: React.ReactChild,
  initialState?: any,
};

export const State = ({
  initialState = {},
  children,
}: IStateProps) => (
  <Provider store={createAppStore(initialState)}>
    {children}
  </Provider>
);

export default State;
