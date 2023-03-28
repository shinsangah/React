import React from 'react';
import ListChild from './ListChild';
import Modal from './Modal';

export default function List() {
  const dataArr = [
    {
      title: "리액트 공부하기",
      todo: "State 사용법 익히기"
    },
    {
      title: "코테 문제 풀기",
      todo: "Lv 0 정복 가즈아"
    },
    {
      title: "한강 가기",
      todo: "경품 타기"
    }
  ]

  return (
    // 모든 컴포넌트는 반드시 최상위에 요소가 하나여야 한다. div 요소로 감싸주기.
    <div>
      <h1>오늘 해야 할 일</h1>
      <Modal />
      {dataArr.map((el, index) => <ListChild title={el.title} todo={el.todo} key={index} />)}
      {dataArr.map((el, index) => {
        return (
          <div key={index}>
            <hr />
            <h2>{el.title}</h2>
            <p>{el.todo}</p>
          </div>
        )
      })}
      <Modal />
    </div>
  )
}
