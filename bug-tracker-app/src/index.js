import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import reportWebVitals from './reportWebVitals';

import BugTracker from './bug-tracker';
import Projects from './projects';
window['store'] = store;
ReactDOM.render(
    <Provider store={store}>
        <div>
            <input type="button" value="Hibernate" onClick={() => window.localStorage.setItem('bug-tracker-state', JSON.stringify(store.getState()))} />
            <h1>Bug Tracker</h1>
            <hr/>
            <Projects />
            <BugTracker />
        </div>
    </Provider>
, document.getElementById('root'))
 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
