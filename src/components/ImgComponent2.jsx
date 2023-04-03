import React from 'react';
import dogImg from '../images/dog.jpg';

export default function ImgComponent2() {
  return (
    <>
      <h1>퍼블릭 폴더</h1>
      <img src="/images/dog.jpg" alt="퍼블릭 강아지" />
      <h1>SRC 폴더</h1>
      <img src={dogImg} alt="소스 강아지" />
    </>
  );
}
