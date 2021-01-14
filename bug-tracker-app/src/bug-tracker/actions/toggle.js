export default function toggle(bugToToggle){
    const toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed };
    const action = { type : 'BUGS_UPDATE', payload : toggledBug };
    return action;
}