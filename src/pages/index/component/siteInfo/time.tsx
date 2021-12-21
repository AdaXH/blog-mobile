import { stringTime } from '@/util/function';
import { useInterval } from '@/util/hooks';
import React, { memo } from 'react';

interface Time {
  hour: string;
  sec: string;
  min: string;
}

export const Time = memo(
  () => {
    const { hour, sec, min } = useInterval<any, Time>(() => {
      const date = new Date();
      const hours = date.getHours();
      const sec = date.getSeconds();
      const min = date.getMinutes();
      return {
        hour: stringTime(hours),
        sec: stringTime(sec),
        min: stringTime(min),
      };
    });
    return (
      <>
        {hour} {min} {sec}
      </>
    );
  },
  () => true,
);
