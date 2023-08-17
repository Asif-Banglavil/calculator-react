import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');

  const buttonClick = (value) => {
    setInput(input + value);
  };

  const deleteCharacter = () => {
    setInput(input.slice(0, -1));
  };

  const clearScreen = () => {
    setInput('');
  };

  const equalClick = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }

    
  };

  return (
    <div>
      <h1>Calculator</h1>

      <div className="main-body">
        <div className="calcu">
          <div className="output">
            <input type="text" id="screen" value={input} readOnly />
          </div>
          <div className="buttons">
            <button onClick={() => clearScreen()} className="btn">
              c
            </button>
            <button onClick={() => deleteCharacter()} className="btn">
              &#9003; {/* Unicode symbol for delete (backspace) */}
            </button>
            <div className="raw">
              <button onClick={() => buttonClick('7')} className="btn">
                7
              </button>
              <button onClick={() => buttonClick('8')} className="btn">
                8
              </button>
              <button onClick={() => buttonClick('9')} className="btn">
                9
              </button>
              <button onClick={() => buttonClick('/')} className="btn">
                /
              </button>
            </div>
            <div className="raw">
              <button onClick={() => buttonClick('4')} className="btn">
                4
              </button>
              <button onClick={() => buttonClick('5')} className="btn">
                5
              </button>
              <button onClick={() => buttonClick('6')} className="btn">
                6
              </button>
              <button onClick={() => buttonClick('*')} className="btn">
                X
              </button>
            </div>
            <div className="raw">
              <button onClick={() => buttonClick('1')} className="btn">
                1
              </button>
              <button onClick={() => buttonClick('2')} className="btn">
                2
              </button>
              <button onClick={() => buttonClick('3')} className="btn">
                3
              </button>
              <button onClick={() => buttonClick('-')} className="btn">
                -
              </button>
            </div>
            <div className="raw">
              <button onClick={() => buttonClick('.')} className="btn">
                .
              </button>
              <button onClick={() => buttonClick('0')} className="btn">
                0
              </button>
              <button onClick={() => buttonClick('+')} className="btn">
                +
              </button>
              <button onClick={() => equalClick()} className="btn">
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
