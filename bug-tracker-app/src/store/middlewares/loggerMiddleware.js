const loggerMiddleware = store => next => action => {
    console.group(action.type);
    console.group('Before -> ' + action.type)
    console.log('state -> ', store.getState())
    console.groupEnd();
    console.log(action);
    next(action);
    console.group('After -> ' + action.type)
    console.log('state -> ', store.getState())
    console.groupEnd();
    console.groupEnd();
};
export default loggerMiddleware;