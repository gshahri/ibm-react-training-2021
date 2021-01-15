import { Fragment, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './index.css';
import projectActionCreators from './actions';

const Projects = ({list, load, selected, setSelectedProject}) => {
    useEffect(() =>{
        load();
    }, [load]);
    console.log(selected);
    return(
        <Fragment>
            <h3>Projects</h3>
            <ol>
                {list.map(project =>(
                    <li 
                        key={project.id} 
                        className={project.id === selected.id ? 'selected' : ''}
                        onClick={ () => setSelectedProject(project === selected ? '' : project)}
                    >{project.name}</li>
                ))}
            </ol>
        </Fragment>

    )
}

function mapStateToProps({projects}){
    const { list, selected } = projects;
    return ({list, selected});
}

function mapDispatchToProps(dispatch){
    const projectActionDispatchers = bindActionCreators(projectActionCreators, dispatch);
    return projectActionDispatchers;
}


export default connect(mapStateToProps, mapDispatchToProps)(Projects);