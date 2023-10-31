import { useState } from 'react';
import './Calculator.css';
import Pantalla from './Pantalla';
import Author from './Author';
import Buttons from './Buttons';

function Calculator() {
  const [result, setResult] = useState('0');
  const [operation, setOperation] = useState('');

  const handleClick = (event) => {
    if (event === 'C') {
      setOperation('');
      setResult('0');
    } else if (event === '+/-') {
      let calculate = eval(operation);
      calculate = -calculate;
      setOperation(calculate);
    } else if (event === '←') {
      if (operation.length === 1) {
        setOperation('');
      } else if (operation.length > 1) {
        let calculate = operation.slice(0, -1);
        setOperation(calculate);
      }
    } else if (event === '=') {
      setOperation(eval(operation));
      setResult(eval(operation));
    } else {
      let calculate = operation + event;
      setOperation(calculate);
    }
  };
  return (
    <>
      <section className='claculator'>
        <h3>
          Calculadora <em>React</em>
        </h3>
        <div className='main-container'>
          <Pantalla
            operation={operation}
            result={result}
          />
          <Buttons handleClick={handleClick} />
          <Author />
        </div>
      </section>
    </>
  );
}

export default Calculator;
