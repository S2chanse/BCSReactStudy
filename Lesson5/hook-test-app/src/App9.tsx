import React from 'react';
import { TimeformatEnum, useClockTime } from './hooks/useClock';

type Props = {};

const App = (props: Props) => {
  const currentTime = useClockTime(1000, TimeformatEnum.HHmmssKOR);
  return <div>{currentTime}</div>;
};

export default App;
