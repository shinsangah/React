// 카운터 만들기 실습

// import React from 'react';
// import  { useState } from 'react';


// export default function Counter() {
//   const [value, setValue] = useState(1);

//   return (
//     <div>
//       Counter
//     <p>
//       <b>{value}</b>
//     </p>
//     <br />
//     <button onClick={() => setValue(value - 1)}>-</button>
//     <button onClick={() => setValue(value + 1)}>+</button>
//   </div>
//   )
// }

// ----------------------------------------------------------------
// 강사님

import React, { useState } from 'react'

export default function Conter() {
const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}
