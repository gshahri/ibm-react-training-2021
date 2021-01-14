export default function removeClosed(bugs){
    const bugsToRetain = bugs.filter(bug => !bug.isClosed);
    const action = { type : 'BUGS_INIT', payload : bugsToRetain};
    return action;
}