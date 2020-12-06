import { applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from './logger';

export default applyMiddleware(
  // logger,
  promise,
  thunk,
);
