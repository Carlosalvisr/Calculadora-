// src/Calculator.js
import React, { useState } from 'react';
import './Calculator.css'; // Importa el archivo CSS

const Calculator = () => {
    const [input, setInput] = useState('');

    const handleClick = (value) => {
        setInput(input + value);
    };

    const calculate = () => {
        try {
            setInput(eval(input).toString());
        } catch (error) {
            setInput('Error');
        }
    };

    const clear = () => {
        setInput('');
    };

    return (
        <div className="calculator"> {/* Añadido: clase para el contenedor principal */}
            <h1>Calculadora</h1>
            <input type="text" value={input} readOnly />
            <div className="button-container"> {/* Añadido: clase para agrupar los botones */}
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button onClick={() => handleClick('+')}>+</button>
                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button onClick={() => handleClick('-')}>-</button>
                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button onClick={() => handleClick('*')}>*</button>
                <button onClick={clear}>C</button>
                <button onClick={() => handleClick('0')}>0</button>
                <button onClick={calculate}>=</button>
                <button onClick={() => handleClick('/')}>/</button>
            </div>
        </div>
    );
};

export default Calculator;