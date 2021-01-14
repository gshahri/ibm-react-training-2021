function bugsReducer(currentState = [], action){
    if (action.type === 'BUGS_ADD_NEW'){
        const newState = [...currentState, action.payload];
        return newState;
    }
    if (action.type === 'BUGS_REMOVE'){
        return currentState.filter(bug => bug.id !== action.payload.id);
    }
    if (action.type === 'BUGS_UPDATE'){
        return currentState.map(bug => bug.id === action.payload.id ? action.payload : bug);
    }
    if (action.type === 'BUGS_INIT'){
        return action.payload;
    }
    return currentState;
}
export default bugsReducer;