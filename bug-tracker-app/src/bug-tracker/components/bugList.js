import BugItem from './bugItem';
const BugList = ({bugs, removeClosed, toggle, remove }) => {
    const bugItems = bugs.map(bug => (
        <BugItem {...{bug, remove, toggle}} />
    ))
    return (
        <section className="list">
            <ol>
                {bugItems}
            </ol>
            <input type="button" value="Remove Closed" onClick={ () => removeClosed(bugs)} />
        </section>
    )
}

export default BugList;