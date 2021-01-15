const BugItem = ({bug, toggle, remove}) => {
    return (
        <li>
            <span 
                onClick={() => toggle(bug)}
                className={ "bugname" + (bug.isClosed ? ' closed' : '') }
            >
                {bug.name}
            </span>
            <div>Project : {bug.projectId}</div>
            <div className="datetime">[ {bug.createdAt.toString()} ]</div>
            <input type="button" value="Remove" onClick={ () => remove(bug)} />
        </li>
    )
}

export default BugItem;