import { ChangeEvent, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [msg, setMsg] = useState<string>('');

  return (
    <div>
      <input
        type='text'
        value={msg}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setMsg(e.currentTarget.value)
        }
      />
      <br />
      <div>{msg}</div>
    </div>
  );
}

export default App;
