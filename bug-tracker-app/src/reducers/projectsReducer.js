const initialState = {
    list : [],
    selected : ''
};

function projectsReducer(currentState = initialState, action){
    if (action.type === 'PROJECTS_INIT')
        return { ...currentState, list : action.payload };
    if (action.type === 'PROJECTS_SET_SELECTED'){
        return { ...currentState, selected : action.payload };
    }
    return currentState;
}

export default projectsReducer;