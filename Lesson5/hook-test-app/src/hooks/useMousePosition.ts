import React, { useState, useEffect } from 'react';

export type PositionType = {
  x: number;
  y: number;
};

export const useMousePos = () => {
  const [position, setPosition] = useState<PositionType>({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setPosition({ x: e.pageX, y: e.pageY });
    window.addEventListener('mousemove', onMove);

    return () => {
      window.removeEventListener('mousemove', onMove);
    };
  }, []);
  return position;
};
