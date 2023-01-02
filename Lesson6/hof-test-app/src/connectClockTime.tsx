import React, { useEffect, useState } from 'react';
import DateAndTime from 'date-and-time';

export enum TimeFormatEnum {
  HHmmss = 'HH : mm : ss',
  HHmm = 'HH:mm',
  HHmmKOR = 'HH시 mm분',
  HHmmssKOR = 'HH시 mm분 ss초',
}

type Props = {
  TargetComponent: React.ComponentType<any>;
  timeFormat: TimeFormatEnum;
  interval: number;
};

export const connectClockTime = ({
  TargetComponent,
  timeFormat,
  interval,
}: Props) => {
  return (props: any) => {
    const [currentTime, setCurrentTime] = useState<string>(
      DateAndTime.format(new Date(), timeFormat)
    );

    useEffect(() => {
      const handler = window.setInterval(() => {
        setCurrentTime(DateAndTime.format(new Date(), timeFormat));
      }, interval);
      return () => {
        window.clearInterval(handler);
      };
    }, []);

    return <TargetComponent {...props} currentTime={currentTime} />;
  };
};

//export default connectClockTime(Child,TimeFormatEnum.HHmmKOR,5000);
