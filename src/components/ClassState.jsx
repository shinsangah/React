import React, { Component } from 'react'

export default class ClassState extends Component {
  // 구버전
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     teacher: "이효석",
  //   }
  // }

  // 신버전
  state = {
    teacher: "이효석",
  }

  // 회사 레거시 코드가 클래스 코드면 하루 정도 공부하면
  // 함수형 잘 하는 사람이 클래스 컴포넌트로 왔다갔다 하는데 문제는 없음 문법만 알면 됨

  render() {
    const { teacher } = this.state;

    return (
      <div>
        <h1>{teacher}</h1>
        <button onClick={() => this.setState({ teacher: 'tetz' })}>영어로!</button>
      </div>
    )
  }
}
