function projectsReducer(currentState = [], action){
    if (action.type === 'PROJECTS_INIT')
        return action.payload;
    return currentState;
}

export default projectsReducer;