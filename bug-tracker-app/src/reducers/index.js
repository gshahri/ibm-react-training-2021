import { combineReducers } from 'redux';

import bugsReducer from './bugsReducer';
import projectsReducer from './projectsReducer';

const rootReducer = combineReducers({
    bugs : bugsReducer,
    projects : projectsReducer
})

export default rootReducer;