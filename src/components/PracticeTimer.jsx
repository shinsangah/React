import React, { useEffect, useState } from 'react';
import { useRef } from 'react';

export default function PracticeTimer() {
  const timeStorage = useRef(0);
  const [timeCheck, settimeCheck] = useState(0);
  const timeVisibleCheck = () => {
    settimeCheck(timeStorage.current);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      timeStorage.current += 1;
      console.log(timeStorage.current);
      console.log('타이머 실행중');
    }, 1000);

    return () => {
      console.log('컴포넌트 언마운트, 타이머가 종료 됩니다!');
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>{timeCheck}</h1>
      <button onClick={timeVisibleCheck}>시간</button>
    </div>
  );
}
