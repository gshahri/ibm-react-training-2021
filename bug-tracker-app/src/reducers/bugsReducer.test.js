import bugsReducer from './bugsReducer';

describe('bugsReducer', () => {
    it('Should add the bug for action - BUGS_ADD_NEW', () => {
        //arrange
            const currentState = [],
                bugToAdd = { id : 1 },
                action = { type : 'BUGS_ADD_NEW', payload : bugToAdd};

        //act
            const newState  = bugsReducer(currentState, action);
        //assert
            expect(newState).toContain(bugToAdd);
    })
})