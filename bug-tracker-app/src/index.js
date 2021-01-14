import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import bugActionCreators from './bug-tracker/actions'
import store from './store';
import reportWebVitals from './reportWebVitals';
import BugTracker from './bug-tracker';

const bugActionDispatchers = bindActionCreators(bugActionCreators, store.dispatch);
function renderApp(){
    const bugs = store.getState();
    ReactDOM.render(
        <BugTracker bugs={bugs} {...bugActionDispatchers} />
    , document.getElementById('root'))
}

renderApp();
store.subscribe(renderApp);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
