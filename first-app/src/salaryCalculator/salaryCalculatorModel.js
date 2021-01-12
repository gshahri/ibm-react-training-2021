function SalaryCalculatorModel() {
    var _data = {
        basic: 0,
        hra: 0,
        da: 0,
        tax: 0,
        salary: 0
    };

    var _callbacks = [];

    this.get = function (attrName) {
        return _data[attrName];
    };

    this.set = function (attrName, value) {
        if (_data[attrName] === value) return;
        _data[attrName] = value;
        _callbacks.forEach(function (callback) {
            if (typeof callback === 'function')
                callback();
        });
    };

    this.subscribe = function (callbackFn) {
        _callbacks.push(callbackFn);
    };
}
//behavior (method)
SalaryCalculatorModel.prototype.calculate = function () {
    var gross = this.get('basic') + this.get('hra') + this.get('da'),
        net = gross * ((100 - this.get('tax')) / 100);
    this.set('salary', net);
}

export default SalaryCalculatorModel;