import { createStore } from 'redux';
import rootReducer from '../reducers'
import appMiddlewares from './middlewares';

let preloadedState;
const rawState = window.localStorage.getItem('bug-tracker-state');
if (rawState){
    preloadedState = JSON.parse(rawState)
}
const store = createStore(rootReducer, preloadedState, appMiddlewares);
export default store;
