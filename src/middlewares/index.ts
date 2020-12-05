import { applyMiddleware } from 'redux';
import promise from 'redux-promise';
import logger from './logger';

export default applyMiddleware(
  // logger,
  promise,
);
