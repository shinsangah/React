import React from 'react';
import { useState } from 'react';
import PracticeTimer from './PracticeTimer';

export default function PracticeRender() {
  const [timeClick, settimeClick] = useState('보이기');
  const timeVisble = () => {
    timeClick === '보이기' ? settimeClick('숨기기') : settimeClick('보이기');
  };

  return (
    <div>
      {timeClick === '숨기기' && <PracticeTimer />}
      <button onClick={timeVisble}>{timeClick}</button>
    </div>
  );
}
