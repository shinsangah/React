import React from 'react'

export default function CustomObj(props) {
  const { name, age, nickName } = props.obj
  return (
    <div>
      <h1>이름 : {name}</h1>
      <h2>나이 : {age}</h2>
      <h2>별명 : {nickName}</h2>
    </div>
  )
}
