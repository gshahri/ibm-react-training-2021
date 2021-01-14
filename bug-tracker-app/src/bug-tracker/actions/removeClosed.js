/* export default function removeClosed(bugs){
    const bugsToRetain = bugs.filter(bug => !bug.isClosed);
    const action = { type : 'BUGS_INIT', payload : bugsToRetain};
    return action;
} */

import bugApi from '../services/bugApi';

export default function removeClosed(bugs){
    return function(dispatch){
        const bugsToRemove = bugs.filter(bug => bug.isClosed);
        bugsToRemove
            .forEach(async bugToRemove => {
                await bugApi.remove(bugToRemove);
                const action = { type : 'BUGS_REMOVE', payload : bugToRemove };
                dispatch(action);
            });
    }
}