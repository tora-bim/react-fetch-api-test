// useEffectをインポートしておく
import React, { useState, useEffect } from 'react';

const FetchData = () => {
  const [data, setData] = useState(undefined);
  // ここを修正
  useEffect(() => {
    fetch('https://5zh8mn07ox.microcms.io/api/v1/works', {
      headers: {
        'X-MICROCMS-API-KEY': 'wttE6qWOh5HG32hvh8Z2K45MSK4vGQDpHYNU',
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(() => alert('error'));
  }, []);
  console.log(data);
  return;
};

export default FetchData;
