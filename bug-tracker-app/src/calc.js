
class Calculator {
    logger = null;

    constructor(logger){
        this.logger = logger;
    }
    add(x,y){
        this.logger.log('Add operation performed');
        return x + y;
    }

    subtract(x,y){
        this.logger.log('Subtract operation performed');
        return x - y;
    }
}

export default Calculator;