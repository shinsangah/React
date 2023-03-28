import React from 'react';
import Modal from './Modal';

export default function List() {
  return (
    // 모든 컴포넌트는 반드시 최상위에 요소가 하나여야 한다. div 요소로 감싸주기.
    <div>
      <h1>오늘 해야 할 일</h1>
      <Modal />
      <hr />
      <h2>리액트 공부하기</h2>
      <p>state 사용법 익히기</p>
      <hr/>
      <h2>코테 문제 풀기</h2>
      <p>Lv 0 정복 가즈아</p>
      <hr />
      <Modal />
    </div>
  )
}
