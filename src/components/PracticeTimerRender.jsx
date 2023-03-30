// 강사님과 함께

import React, { useState } from 'react';
import PracticeTimer2 from './PracticeTimer2';

export default function PracticeTimerRender() {
  const [show, setShow] = useState(false);

  return (
    <>
      {show && <PracticeTimer2 />}
      <button onClick={() => setShow((cur) => !cur)}>
        {show ? '숨기기' : '보이기'}
      </button>
    </>
  );
}
