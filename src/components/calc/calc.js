import React, { useState } from 'react';

const Calc = () => {
  const [inputA, SetinputA] = useState(0);
  const [inputB, SetinputB] = useState(0);
  const [result, Setresult] = useState(0);

  const addition = (a, b) => {
    Setresult(parseInt(a) + parseInt(b));
    console.log('addition', result);
  };

  const supraction = (a, b) => {
    Setresult(parseInt(a) - parseInt(b));
    console.log('supraction', result);
  };

  const updateValueA = (e) => {
    SetinputA(e.target.value);
  };

  const updateValueB = (e) => {
    SetinputB(e.target.value);
  };
  return (
    <>
      <h1>Calc Program</h1>
      <input
        type="number"
        onChange={(e) => updateValueA(e)}
        placeholder="Enter Name"
      />
      <br />
      <input
        type="number"
        onChange={(e) => updateValueB(e)}
        placeholder="Enter Age"
      />
      <br />
      <button onClick={() => addition(inputA, inputB)}>+ Add</button>
      <button onClick={() => supraction(inputA, inputB)}>- Sub</button>
      <br />
      <br />
      result: {result}
    </>
  );
};

export default Calc;
