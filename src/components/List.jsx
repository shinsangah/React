import React from 'react';
import ListChild from './ListChild';
import Modal from './Modal';

export default function List() {
  return (
    // 모든 컴포넌트는 반드시 최상위에 요소가 하나여야 한다. div 요소로 감싸주기.
    <div>
      <h1>오늘 해야 할 일</h1>
      <Modal />
      <ListChild title="리액트 공부하기" todo="state 사용법 익히기"/>
      <ListChild title="코테 문제 풀기" todo="Lv 0 정복 가즈아"/>
      <Modal />
    </div>
  )
}
