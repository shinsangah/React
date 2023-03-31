import React, { useEffect, useState } from 'react';

export default function UseEffectFetch() {
  const [dataArr, setDataArr] = useState([]);

  async function fetchData() {
    const resFetch = await fetch('http://localhost:4000/', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });

    if (resFetch.status !== 200) return '망했어요';

    const data = await resFetch.json();
    // 자바스크립트 데이터 함수로 변경한 함수 / 객체
    console.log(data);
    setDataArr((cur) => data);
    // => 화살표 뒤에 중괄호 없으면 return 이라고 생각
  }

  useEffect(async () => {
    fetchData();
  }, []);

  return <div>UseEffectFetch</div>;
}
