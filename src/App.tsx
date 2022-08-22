import React, { useState } from 'react';
import calculate from './app/calc.js';
import Button from './components/Button/Button';

function App() {

  const Buttons = [
    '1', '2', '3', 'C',
    '4', '5', '6', '+',
    '7', '8', '9', '-',
    '/', '0', '*', '=',
    '(', ')',
  ]

  const [inputState, setInputState] = useState('');
  const [resultState, setResultState] = useState('');

  const btnOnClick = (number: string) => {
    if (number === 'C')
      return () => setInputState('');
    if (number === '=')
      return () => {
        calculate(inputState, setResultState);
        setInputState('');
      }
    return () => setInputState(inputState.concat(number));
  }

  return (
    <div className="container mx-auto px-5">
      <div className="">
        <input
          value={inputState}
          onChange={e => setInputState(e.target.value)}
          type="text"
          className='m-3 border-2 border-yellow-400 rounded-md p-3 flex mx-auto caret-pink-500' />
        <div className='grid gap-4 grid-cols-4 w-96 mx-auto mb-10'>
          {Buttons.map((e) => {
            return (
              <Button onClick={btnOnClick(e)} key={e}>
                {e}
              </Button>
            )
          })}
        </div>
        <div className='font-mono font-bold text-7xl text-center'>
          {resultState}
        </div>
      </div>
    </div>
  );
}

export default App;
