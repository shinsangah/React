import { Component } from "react";

class MainHeader extends Component {
  constructor() {
    super();
    this.cas = true;
  }

  render() {
    return (
      <h1>Hello, {this.cas ? "캬하" : "노맛"} world!</h1>
    )
  }
}

export default MainHeader;

// function MainHeader () {
//   const cas = true;

//   return (
//     //컴포넌트는 파스칼케이스로 만들어야 읽어들임
//     // <h1>Hello, {pororo + friend} world!</h1>
//     // <h1>Hello, {arr.map((el) => el)} world!</h1>
//     <h1>Hello, {cas ? "캬하" : "노맛"} world!</h1>
//   );
// };

// export default MainHeader;