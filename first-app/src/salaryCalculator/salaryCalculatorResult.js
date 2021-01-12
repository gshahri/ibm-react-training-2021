const SalaryCalculatorResult = ({ data }) => {
    const salaryClass = data.salary < 10000 ? 'poorSalary' : 'goodSalary';
    const salaryEle = (<td id="tdSalary" className={salaryClass}>{data.salary}</td>);
    return(
        <div className="field">
            <table>
                <tbody>
                    <tr>
                        <td id="tdBasic">{data.basic}</td>
                        <td id="tdHra">{data.hra}</td>
                        <td id="tdDa">{data.da}</td>
                        <td id="tdTax">{data.tax}</td>
                        { data.salary === 0 ? null : salaryEle }
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default SalaryCalculatorResult;