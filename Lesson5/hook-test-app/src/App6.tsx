import React, { useRef } from 'react';

type Props = {};

const App = ({}: Props) => {
  const elName: React.RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null);
  const goFirstInputElement = () => {
    if (elName.current) elName.current.focus();
  };
  return (
    <div className='boxStyle'>
      이름 : <input type='text' ref={elName} defaultValue='홍길동' />
      <br />
      전화 : <input type='text' defaultValue='000-0000-0000' />
      <br />
      주소 : <input type='text' defaultValue='서울' />
      <br />
      <button onClick={goFirstInputElement}>첫 번째 필드 focus</button>
    </div>
  );
};

export default App;
