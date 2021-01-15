import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import store from './store';
import reportWebVitals from './reportWebVitals';

import BugTracker from './bug-tracker';
import Projects from './projects';
import Home from './home';

ReactDOM.render(
    <Provider store={store}>
        <div>
            <input type="button" value="Hibernate" onClick={() => window.localStorage.setItem('bug-tracker-state', JSON.stringify(store.getState()))} />
            <h1>Bug Tracker</h1>
            <Router>
                <section>
                    <span> [ <Link to="/">Home</Link> ] </span>
                    <span> [ <Link to="/bugs?xyz=100">Bugs</Link> ] </span>
                    <span> [ <Link to="/projects">Projects</Link> ] </span>
                </section>
                <hr/>
                <Switch>
                    <Route path="/bugs">
                        <BugTracker />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    </Provider>
, document.getElementById('root'))
 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
