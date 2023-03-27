// 단축기 rfc

import React from 'react';
import { useState } from 'react';

export default function State() {
  // let teacher = "이효석";
  // // teacher 라는 변수를 바꿔줘야 해서 let으로 다시 선언한 것
  // // const는 처음 설정한 값을 못바꿔줘서 teacher = "tetz" 이 부분은 에러가 날것

  // function inEnglish() {
  //   const spanEl = document.querySelector("#text");
  //   spanEl.innerHTML = "tetz";
  // }
  const [teacher, setTeacher] = useState("이효석");
  // [state이름, state변경함수] = useState(초기값);
  
  return (
    <div>
      <button onClick={() => setTeacher("tetz")}>영어로</button>
      <br />
      <span id ="text">{teacher}</span>
    </div>
  )
}
