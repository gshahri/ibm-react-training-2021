import React, { Fragment } from 'react';
import './index.css';

//presentation (OR) dumb component
import BugStats from './components/bugStats';
import BugSort from './components/bugSort';
import BugEdit from './components/bugEdit';
import BugList from './components/bugList';

//container (OR) smart component
const BugTracker = ({bugs, addNew, remove, toggle, removeClosed}) => {
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

export default BugTracker;