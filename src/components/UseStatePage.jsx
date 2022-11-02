import React, { useState } from 'react';

export default function UseStatePage() {
  const [counter, setCounter] = useState(5);
  const [input, setInput] = useState('');
  const changeHandler = (e) => setInput(e.target.value);
  console.log(input);
  return (
    <>
      <div className="row">
        <h1>{counter}</h1>
        {' '}
        <button
          type="button"
          onClick={() => {
            setCounter((prev) => prev + 1);
            setCounter((prev) => prev + 1);
            setCounter((prev) => prev + 1);
            setCounter((prev) => prev + 1);
          }}
          className="btn btn-danger"
        >
          Count
        </button>
      </div>
      <div className="row">
        <input type="text" value={input} onChange={changeHandler} />
      </div>
    </>
  );
}
