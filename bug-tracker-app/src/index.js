import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';

import store from './store';
import reportWebVitals from './reportWebVitals';

import bugActionCreators from './bug-tracker/actions'
import BugTracker from './bug-tracker';

import projectActionCreators from './projects/actions';
import Projects from './projects';

const bugActionDispatchers = bindActionCreators(bugActionCreators, store.dispatch);
const projectActionDispatchers = bindActionCreators(projectActionCreators, store.dispatch);

function renderApp(){
    const storeState = store.getState();
    const bugs = storeState.bugs,
        projects = storeState.projects;

    ReactDOM.render(
        <div>
            <h1>Bug Tracker</h1>
            <hr/>
            <Projects list={projects} {...projectActionDispatchers}/>
            <BugTracker bugs={bugs} {...bugActionDispatchers} />
        </div>
    , document.getElementById('root'))
}

renderApp();
store.subscribe(renderApp);
 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
