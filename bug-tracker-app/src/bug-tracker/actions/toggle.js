/* export default function toggle(bugToToggle){
    const toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed };
    const action = { type : 'BUGS_UPDATE', payload : toggledBug };
    return action;
} */

import bugApi from '../services/bugApi'

export default function toggle(bugToToggle){
    return async function(dispatch){
        const toggledBugData = { ...bugToToggle, isClosed : !bugToToggle.isClosed };
        const toggledBug = await bugApi.save(toggledBugData);
        const action = { type : 'BUGS_UPDATE', payload : toggledBug };
        dispatch(action);
    }
}