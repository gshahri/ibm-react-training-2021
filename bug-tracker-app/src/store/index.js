import { createStore } from 'redux';
import rootReducer from '../reducers'
import appMiddlewares from './middlewares';

const preloadedState = JSON.parse(window.localStorage.getItem('bug-tracker-state'))
const store = createStore(rootReducer, preloadedState, appMiddlewares);

console.log('initial  storestate -> ', store.getState());
export default store;
