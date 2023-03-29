import React, { useState, useRef } from 'react';

function Gugudan() {
  const [firstNumber, setFirstNumber] = useState(randomNumber());
  const [secondNumber, setSecondNumber] = useState(randomNumber());
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  const inputRef = useRef();

  function randomNumber() {
    return Math.ceil(Math.random() * 9);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (parseInt(value) === firstNumber * secondNumber) {
      alert('정답입니다.');
      setValue('');
      newQuiz();
      inputRef.current.focus();
    } else {
      alert('틀렸어요!');
      setValue('');
      inputRef.current.focus();
    }
  };

  const userInput = (e) => {
    setValue(e.target.value);
  };

  const newQuiz = () => {
    setFirstNumber(randomNumber());
    setSecondNumber(randomNumber());
  };

  return (
    <div className="gugudan-container">
      <form onSubmit={onSubmit}>
        <h1>
          {firstNumber} × {secondNumber}
        </h1>
        <input
          ref={inputRef}
          value={value}
          onChange={userInput}
          type="number"
        />
        <button>정답 제출!</button>
        <p className="result"> {result}</p>
      </form>
    </div>
  );
}

export default Gugudan;
