import { ChangeEvent, useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [msg, setMsg] = useState<string>('');
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log(`클릭한 회수는 ${count}회 입니다.`);
    return () => {
      console.log(`return 메스드 호출`);
    };
  }, [count]);

  return (
    <div>
      이름변경:
      <input
        type='text'
        value={msg}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setMsg(e.currentTarget.value)
        }
      />
      <br />
      <button onClick={() => setCount((count) => count + 1)}>클릭!</button>
      <div>{count}</div>
    </div>
  );
}

export default App;
