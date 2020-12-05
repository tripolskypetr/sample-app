import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import middlewares from './middlewares';

const createAppStore = (initialState) => createStore(reducers, initialState, middlewares);

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
