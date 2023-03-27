// function HelloEx() {

//   const helloStr = "Hello, first excercise";
//   const styleObj = {marginTop: "32px", backgroundColor: "skyblue"}

//   return (
//   <div style={styleObj}>
//   <span onClick={() => { alert('클릭 됨') }}>{helloStr}</span>
//   </div>
//   );
// }

// export default HelloEx;

// ------------------------------------------------------------------------

import React from 'react'

export default function Example1() {
  const str = "Hello, first excercise";
  // 가급적 컴포넌트 안에다 선언하는게 좋음

  return (
    <div style={{ marginTop: "32px", backgroundColor: "skyblue" }}
    // div 요소에 인라인 스타일로 적용해주기
    onClick={() => { alert('클릭 됨') }}>{str}</div>
  )
}
