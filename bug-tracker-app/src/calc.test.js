import Calculator from './calc';
import Logger from './logger';

describe('Calculator', () => {
    let calc,loggerMock;
    
    beforeEach(() => {
        loggerMock = { log : jest.fn() }
        calc = new Calculator(loggerMock);
    })

    it('should add the given values', () => {
        //arrange
        const x = 10,
            y = 20,
            expectedResult = 30;

        //act
        const actualResult = calc.add(x,y);

        //assert
        expect(actualResult).toBe(expectedResult);
        expect(loggerMock.log.mock.calls.length).toBe(1);
        expect(loggerMock.log.mock.calls[0][0]).toBe('Add operation performed');
    });

    it('should subtract the given values', () => {
        //arrange
        const x = 10,
            y = 20,
            expectedResult = -10;

        //act
        const actualResult = calc.subtract(x,y);

        //assert
        expect(actualResult).toBe(expectedResult);
    });
})
