import React, { Fragment, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import useQuery from '../utils/useQuery';

import './index.css';
import bugActionCreators from './actions';

//presentation (OR) dumb component
import BugStats from './components/bugStats';
import BugSort from './components/bugSort';
import BugEdit from './components/bugEdit';
import BugList from './components/bugList';

//container (OR) smart component
const BugTracker = ({bugs, projects, addNew, remove, toggle, removeClosed, load }) => {
    
    const query = useQuery();
    console.log('xyz -> ', query.get('xyz') );
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
            {/* <BugEdit addNew={addNew} projects={projects} /> */}
            <BugEdit {...{addNew, projects}} />
            <BugList {...{bugs, remove, toggle, removeClosed}} />
        </Fragment>
    )
}

/* function mapStateToProps(storeState){
    const { bugs, projects } = storeState;
    return { bugs : bugs, projects : projects };
} */

/* function mapStateToProps({ bugs, projects }){
    return { bugs, projects };
} */

//const mapStateToProps = ({bugs, projects}) => ({ bugs, projects});

/* function mapDispatchToProps(dispatch){
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
    return bugActionDispatchers;
} */

//const mapDispatchToProps = (dispatch) => bindActionCreators(bugActionCreators, dispatch);

//export default connect(mapStateToProps, mapDispatchToProps)(BugTracker);

export default connect(
    ({bugs, projects}) => {
        if (!projects.selected){
            return ({bugs, projects : projects.list})
        }
        return ({
            bugs : bugs.filter(bug => parseInt(bug.projectId) === parseInt(projects.selected.id)), 
            projects : projects.list
        });
    },
    dispatch => bindActionCreators(bugActionCreators, dispatch)
)(BugTracker);