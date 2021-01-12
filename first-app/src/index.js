import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import SalaryCalculator from './salaryCalculator';
import SalaryCalculatorModel from './salaryCalculator/salaryCalculatorModel';

/* 
import * as calculator from './calc';
console.log(calculator); 
*/

/* 
import * as calculator from './calc';
//const add = calculator.add;
const { add } = calculator;
console.log(add(100,200)); 
*/

/* 
import { add } from './calc';
console.log(add(100,200));  
*/

//importing the default exported entity
/* 
import calculator from './calc'
console.log(calculator.subtract(100,200)); 
*/

/* 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); 
*/

const model = new SalaryCalculatorModel();
function renderCalculator(){
    ReactDOM.render(
        <SalaryCalculator model={model}/>,
        document.getElementById('root')
    )
}
renderCalculator();
model.subscribe(renderCalculator)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
