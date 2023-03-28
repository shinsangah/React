import React from 'react'

export default function List() {
  return (
    <div>
      <h1>오늘 해야 할 일</h1>
      <hr />
      <h2>리액트 공부하기</h2>
      <p>state 사용법 익히기</p>
      <hr/>
      <h2>코테 문제 풀기</h2>
      <p>Lv 0 정복 가즈아</p>
      <hr />
      <div className='modal' style= {{ backgroundColor: "grey"}}>
        <h2>오늘 해야할 일 2개</h2>
        <h2>오늘 완료한 일 2개</h2>
      </div>
    </div>
  )
}
