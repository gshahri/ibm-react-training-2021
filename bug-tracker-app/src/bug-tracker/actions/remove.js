/* export default function remove(bugToRemove){
    const action = { type : 'BUGS_REMOVE', payload : bugToRemove };
    return action;
} */

import bugApi from '../services/bugApi';

export default function remove(bugToRemove){
    return async function(dispatch){
        await bugApi.remove(bugToRemove)
        const action = { type : 'BUGS_REMOVE', payload : bugToRemove };
        dispatch(action);
    }
}