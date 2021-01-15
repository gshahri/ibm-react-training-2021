/* export default function remove(bugToRemove){
    const action = { type : 'BUGS_REMOVE', payload : bugToRemove };
    return action;
} */

import bugApi from '../services/bugApi';

//using the thunk/async middleware
/* 
export default function remove(bugToRemove){
    return async function(dispatch){
        await bugApi.remove(bugToRemove)
        const action = { type : 'BUGS_REMOVE', payload : bugToRemove };
        dispatch(action);
    }
} 
*/

export default async function remove(bugToRemove){
    await bugApi.remove(bugToRemove)
    const action = { type : 'BUGS_REMOVE', payload : bugToRemove };
    return action;
}