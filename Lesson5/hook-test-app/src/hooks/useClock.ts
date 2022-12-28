import { useEffect, useState } from 'react';
import DateAndTime from 'date-and-time';

enum TimeformatEnum {
  HHmmss = 'HH : mm : ss',
  HHmm = 'HH:mm',
  HHmmKOR = 'HH시 mm분',
  HHmmssKOR = 'HH시 mm분 ss초',
}

const useClockTime = (interval: number, timeFormat: TimeformatEnum) => {
  const [currentTime, setCurrentTime] = useState<string>(
    DateAndTime.format(new Date(), timeFormat)
  );
  useEffect(() => {
    const handler = window.setInterval(() => {
      setCurrentTime(DateAndTime.format(new Date(), timeFormat));
    }, 1000);
    return () => {
      window.clearInterval(handler);
    };
  }, []);
  return currentTime;
};

export { TimeformatEnum, useClockTime };
