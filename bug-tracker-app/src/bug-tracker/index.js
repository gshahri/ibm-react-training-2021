import React, { Fragment, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './index.css';
import bugActionCreators from './actions';

//presentation (OR) dumb component
import BugStats from './components/bugStats';
import BugSort from './components/bugSort';
import BugEdit from './components/bugEdit';
import BugList from './components/bugList';

//container (OR) smart component
const BugTracker = ({bugs, addNew, remove, toggle, removeClosed, load}) => {
    useEffect(() => {
        load();
    }, [load]);
    
    return(
        <Fragment>
            <section>
                <h3>Bugs</h3>
            </section>
            <BugStats bugs={bugs} />
            <BugSort/>
            <BugEdit addNew={addNew} />
            <BugList {...{bugs, remove, toggle, removeClosed}} />
        </Fragment>
    )
}

function mapStateToProps(storeState){
    const { bugs } = storeState;
    return { bugs : bugs };
}

function mapDispatchToProps(dispatch){
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
    return bugActionDispatchers;
}

export default connect(mapStateToProps, mapDispatchToProps)(BugTracker);