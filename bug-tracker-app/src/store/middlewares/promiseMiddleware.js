const promiseMiddleware = store => next => action => {
    if (action instanceof Promise){
        action.then(actionObj => store.dispatch(actionObj));
        return;
    }
    return next(action);
}

export default promiseMiddleware;