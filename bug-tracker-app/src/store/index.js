import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import bugsReducer from '../reducers/bugsReducer';

/* const loggerMiddleware = store => next => action => {
    console.group(action.type);
    console.group('Before -> ' + action.type)
    console.log('state -> ', store.getState())
    console.groupEnd();
    console.log(action);
    next(action);
    console.group('After -> ' + action.type)
    console.log('state -> ', store.getState())
    console.groupEnd();
    console.groupEnd();
};

const asyncMiddleware = ({dispatch, getState}) => next => action => {
    if (typeof action === 'function'){
        return action(dispatch, getState);
    }
    return next(action);
}

const store = createStore(bugsReducer, applyMiddleware(loggerMiddleware, asyncMiddleware));
*/

const store = createStore(bugsReducer, applyMiddleware(logger, thunk));
export default store;