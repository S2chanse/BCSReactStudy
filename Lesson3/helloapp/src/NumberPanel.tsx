import React, { useState } from 'react';

type NumberPanelPropsType = {
  a: number;
  b: number;
};
export default function NumberPanel({ a, b }: NumberPanelPropsType) {
  const [sum, setSum] = useState<number>(a + b);
  const addClickSum = () => {
    let resultSum = sum + 1;
    setSum(resultSum);
  };
  return (
    <div onClick={() => addClickSum()} className='card card-body bg-light mb-3'>
      {sum}
    </div>
  );
}
