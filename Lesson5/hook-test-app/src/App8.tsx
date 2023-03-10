import React, { useEffect, useState } from 'react';
import DateAndTime from 'date-and-time';
const App = () => {
  const [currentTime, setCurrentTime] = useState<string>(
    DateAndTime.format(new Date(), 'HH : mm :ss')
  );

  useEffect(() => {
    const handler = window.setInterval(() => {
      setCurrentTime(DateAndTime.format(new Date(), 'HH : mm :ss'));
    }, 1000);
    return () => {
      window.clearInterval(handler);
    };
  });

  return (
    <div>
      <h2>íėŽėę°</h2>
      <br />
      <div>{currentTime}</div>
    </div>
  );
};

export default App;
