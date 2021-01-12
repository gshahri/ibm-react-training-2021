import SalaryCalculatorInput from './salaryCalculatorInput';
import SalaryCalculatorResult from './salaryCalculatorResult';
import './index.css';

const SalaryCalculator = ({ model }) => {
    const data = {
        basic : model.get('basic'),
        hra: model.get('hra'),
        da: model.get('da'),
        tax: model.get('tax'),
        salary: model.get('salary'),
    }; 
    return(
        <section>
            <SalaryCalculatorInput labelText="Basic :" onValueChange={ value => model.set('basic', value) }/>
            <SalaryCalculatorInput labelText="HRA :" onValueChange={ value => model.set('hra', value) } />
            <SalaryCalculatorInput labelText="DA :" onValueChange={ value => model.set('da', value) } />
            <SalaryCalculatorInput 
                labelText="Tax :" 
                onValueChange={value => model.set('tax', value)} 
                type="range"
                min="0" max="30" defaultValue="0"
            />
            <div className="field">
                <input type="button" value="Calculate" id="btnCalculate" onClick={ _ => model.calculate() } />
            </div>
            <SalaryCalculatorResult data={data}/>
        </section>
    )
};

export default SalaryCalculator;