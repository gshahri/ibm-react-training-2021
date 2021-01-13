const StateManager = (function(){
    let _currentState = undefined,
        _callbacks = [],
        _reducer = undefined,
        _init_action = { type : '@@INIT/ACTION' };

    function getState(){
        return _currentState;
    }

    function subscribe(callback){
        if (typeof callback === 'function')
            _callbacks.push(callback);
    }

    //private utility 
    function triggerChange(){
        _callbacks.forEach(callback => callback())
    }

    function dispatch(action){
        //reducer is invoked for dispatching an action
        const newState = _reducer(_currentState, action);
        if (newState === _currentState) return;
        _currentState = newState;
        triggerChange();
    }

    function createStore(reducer){
        if (typeof reducer !== 'function')
            throw new Error('reducer function is manadatory to create the store!');
        _reducer = reducer;
        //reducer is invoked to initialize the currentState with a default valid state
        _currentState = _reducer(undefined, _init_action)
        if (typeof _currentState === 'undefined')
            throw new Error('Default valid state cannot be undefined');
        const store = { getState, subscribe, dispatch };
        return store;
    }

    return { createStore };
})();