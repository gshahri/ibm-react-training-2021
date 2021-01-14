import { createStore, applyMiddleware } from 'redux';

import bugsReducer from '../reducers/bugsReducer';

const loggerMiddleware = store => next => action => {
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

const asyncMiddleware = store => next => action => {
    if (typeof action === 'function'){
        return action(store.dispatch);
    }
    return next(action);
}

const store = createStore(bugsReducer, applyMiddleware(loggerMiddleware, asyncMiddleware));

export default store;