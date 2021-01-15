/* 
let _currentBugId = 0;
export default function addNew(newBugName){
    const newBug = { 
        id : ++_currentBugId,
        name : newBugName,
        isClosed : false,
        createdAt : new Date()
    };
    const action = { type : 'BUGS_ADD_NEW', payload : newBug };
    return action;
}; 
*/

import bugApi from '../services/bugApi'

export default function addNew(newBugName){
    return async function(dispatch){
        const newBugData = { 
            id : 0,
            name : newBugName,
            isClosed : false,
            createdAt : new Date(),
            projectId : 0 //id of the project selected in the dropdown list box
        };
        const newBug = await bugApi.save(newBugData);
        const action = { type : 'BUGS_ADD_NEW', payload : newBug };
        dispatch(action);
    }
};