const projectsData = [
    { id : 1, name : 'Payroll Master'},
    { id : 2, name : 'Bug Tracker'},
    { id : 3, name : 'Task Manager'}
];

const projectActionCreators = { 
    load(){
        const action = { type : 'PROJECTS_INIT', payload  : projectsData };
        return action;
    },
    setSelectedProject(project){
        const action = { type : 'PROJECTS_SET_SELECTED', payload : project };
        return action;
    }
}

export default projectActionCreators;