// 옛날 문법 (현직에서 쓰고있는 경우 있음)

// import { Component } from "react";

// class BtnToNaver extends Component {
//   render () {
//     return (
//       <a href="https://www.naver.com/" style={{ fontSize: "50px" }}>네이버로가기</a>
//     )
//   }
// }

// 최신 문법

function BtnToNaver() {
  const addr = 'http://naver.com';

  return <a href={addr}>네이버 페이지 이동</a>;
}

export default BtnToNaver;
// 하나 뺄 때는 default 붙여서
// 여러개 뽑을 때는 exprt { BtnToNaver, } function이 여러개면
