
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

function load(){
    const bugs = getLocalBugs();
    const action = { type : 'BUGS_INIT', payload : bugs };
    return action;
}

export default load;