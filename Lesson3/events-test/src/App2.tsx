import React, { ChangeEventHandler, useState } from 'react';

export default function App() {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    let currentValue: number = isNaN(parseInt(e.currentTarget.value))
      ? 0
      : parseInt(e.currentTarget.value);

    type === 'x' ? setX(currentValue) : setY(currentValue);
    setResult(x + y);
  };
  return (
    <div style={{ margin: '5px' }}>
      <h3>이벤트 기초</h3>
      <div>
        x:
        <input type='text' value={x} onChange={(e) => changeHandler(e, 'x')} />
        <br />
        y:
        <input type='text' value={y} onChange={(e) => changeHandler(e, 'y')} />
        <br />
        result:{x + y}
      </div>
    </div>
  );
}
