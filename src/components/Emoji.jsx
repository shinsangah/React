// 실습

// import React, { useState } from 'react'

// export default function Like() {
//   const [like, setLike] = useState(0);

//   return (
//     <div>
//       <br />
//       <span style={{ fontSize: "100px" }}>{like >= 10 ? "🙉" : "👍"}</span>
//       <br />
//       <h1>{like}</h1>
//       <button onClick={() => setLike(like + 1)}>좋아요</button>
//     </div>
//   )
// }

// ---------------------------------------------------------------------------
    // 현재 state 값 current 를 넣어줌. state 값 기억 안날 때 이런 식으로 사용 가능 (콜백 형태)

import React, { useState } from 'react'

export default function Emoji() {
  const [count, setCount] = useState(0);
  return (
    <div>
    <h1 style={{cursor: "pointer"}} onClick={() => { setCount((cur) => cur + 1) }}>{count >= 10 ? "🙉" : "👍"}</h1>
    <h1>{count}</h1>
    </div>
  )
}
