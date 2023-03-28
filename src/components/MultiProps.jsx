import React from 'react'

export default function MultiProps({ text, href, userID }) {
  // 가장 추천되는 방법은 인자에서 받을 때 미리 구조분해 할당 해버리는 것
  return (
    <div>
      <h1>{userID} 님 반갑습니다!</h1>
      <a href={href}>{text}</a>
    </div>
  )
}
