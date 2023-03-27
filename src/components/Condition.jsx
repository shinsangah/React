import React, { useState } from 'react'

export default function Condition() {
  const [condition, setCondition] = useState(true);

  return (
    <div>
      <h1>{condition ? "🙉" : "🙈"}</h1>
      <button onClick={() => setCondition(!condition)}>나타났다 숨었다</button>
    </div>
  )
}
