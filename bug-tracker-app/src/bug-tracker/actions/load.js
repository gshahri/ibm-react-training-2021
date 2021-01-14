import * as axios from 'axios';
import bugApi from '../services/bugApi';

function getLocalBugs(){
    const bugs = [
        {
        "id": 1,
        "name": "Local Bug - 1",
        "isClosed": true,
        "createdAt": "2020-12-08T02:08:26.035Z"
        },
        {
        "id": 2,
        "name": "Local Bug - 2",
        "isClosed": false,
        "createdAt": "2020-12-08T02:11:50.204Z"
        }
    ];
    return bugs;
}

/* function getRemoteBugs(){
   return axios.get('http://localhost:3030/bugs')
        .then(response => response.data)
} */

//the above function implementation using "async await"
async function getRemoteBugs(){
   const response = await axios.get('http://localhost:3030/bugs');
   return response.data;
}

//sync action
/* 
function load(){
    const bugs = getLocalBugs();
    const action = { type : 'BUGS_INIT', payload : bugs };
    return action;    
} 
*/


//async action
/* function load(){
    return function(dispatch){
        axios.get('http://localhost:3030/bugs')
            .then(response => response.data)
            .then(bugs => {
                const action = { type : 'BUGS_INIT', payload : bugs };
                dispatch(action);
            });   
    }
} */

//using async await
/* function load(){
    return async function(dispatch){
        const response = await axios.get('http://localhost:3030/bugs');
        const bugs = response.data
        const action = { type : 'BUGS_INIT', payload : bugs };
        dispatch(action);
    }
} */

//using the getRemoteBugs()
/* 
function load(){
    return async function(dispatch){
        const bugs = await getRemoteBugs();
        const action = { type : 'BUGS_INIT', payload : bugs };
        dispatch(action);
    }
} 
*/

//using the bugApi service
function load(){
    return async function(dispatch){
        const bugs = await bugApi.getAll();
        const action = { type : 'BUGS_INIT', payload : bugs };
        dispatch(action);
    }
}

export default load;