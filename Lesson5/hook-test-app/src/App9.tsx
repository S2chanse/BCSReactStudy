import React from 'react';
import { TimeformatEnum, useClockTime } from './hooks/useClock';
import { useMousePos } from './hooks/useMousePosition';

type Props = {};

const App = (props: Props) => {
  const currentTime = useClockTime(1000, TimeformatEnum.HHmmssKOR);
  const mousePosition = useMousePos();
  return (
    <div>
      <h2>시간</h2>
      <div>{currentTime}</div>
      <hr />
      <h2>마우스 위치</h2>
      <div>
        {mousePosition.x} : {mousePosition.y}
      </div>
    </div>
  );
};

export default App;
