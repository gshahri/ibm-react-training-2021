const SalaryCalculatorInput = ({ onValueChange, labelText, type = "number", ...restProps }) => (
    <div className="field">
        <label htmlFor="">{labelText}</label>
        <input
            type={type}
            onChange={evt => onValueChange(parseInt(evt.target.value))}
            {...restProps}
        />
    </div>
);

export default SalaryCalculatorInput;