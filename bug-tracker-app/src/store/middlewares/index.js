import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promiseMiddleware from './promiseMiddleware';
import { applyMiddleware } from 'redux';

const appMiddlewares = applyMiddleware(logger, thunk, promiseMiddleware );
export default appMiddlewares;
