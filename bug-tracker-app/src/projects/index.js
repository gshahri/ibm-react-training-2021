import { Fragment, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import projectActionCreators from './actions';

const Projects = ({list, load}) => {
    useEffect(() =>{
        load();
    }, [load]);
    return(
        <Fragment>
            <h3>Projects</h3>
            <ol>
                {list.map(project =>(
                    <li key={project.id}>{project.name}</li>
                ))}
            </ol>
        </Fragment>

    )
}

function mapStateToProps(storeState){
    const { projects } = storeState;
    return { list : projects };
}

function mapDispatchToProps(dispatch){
    const projectActionDispatchers = bindActionCreators(projectActionCreators, dispatch);
    return projectActionDispatchers;
}


export default connect(mapStateToProps, mapDispatchToProps)(Projects);