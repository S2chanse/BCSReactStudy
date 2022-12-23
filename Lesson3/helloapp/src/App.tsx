import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import CountryList from './CountryList';
import NumberPanel from './NumberPanel';
import styles from './styles';
import Footer from './Footer';
import { BasicButton, ItalicButtom, UnderLineButton } from './Buttons';
type Props = {};
export type CountryType = {
  no: number;
  country: string;
  visited: boolean;
};

function App(props: Props) {
  let msg = <h3>Hello World</h3>;
  let list: CountryType[] = [
    { no: 1, country: '이집트', visited: false },
    { no: 2, country: '일본', visited: true },
    { no: 3, country: '핀란드', visited: false },
    { no: 4, country: '러시아', visited: false },
    { no: 5, country: '대만', visited: false },
  ];
  const add = (a: number, b: number) => {
    return <NumberPanel a={a} b={b} />;
  };
  const [theme, setTheme] = useState<string>('basic');
  return (
    <div className='container'>
      {msg}!
      <hr style={styles.dashStyle} />
      {add(3, 4)}
      <CountryList countires={list} />
      <BasicButton>베이직</BasicButton>
      <UnderLineButton>언더라인</UnderLineButton>
      <ItalicButtom>이탈릭</ItalicButtom>
      <Footer theme={theme} />
    </div>
  );
}

export default App;
