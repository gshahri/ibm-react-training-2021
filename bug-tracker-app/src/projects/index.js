import { Fragment, useEffect } from 'react';
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

export default Projects;