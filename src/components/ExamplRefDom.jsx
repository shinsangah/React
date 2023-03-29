import React, { useRef } from 'react';

export default function ExampleRefDom() {
  const divEl = useRef();
  const inputEl = useRef();

  const changeComponentColor = () => {
    // const color = inputEl.current.value;
    // divEl.current.style.backgroundColor = color;

    divEl.current.style.backgroundColor = inputEl.current.value;
  };

  return (
    <div>
      <div ref={divEl}>
        <input ref={inputEl} type="text" />
        <br />
        <button onClick={changeComponentColor}>컴포넌트 색상 적용</button>
      </div>
    </div>
  );
}
