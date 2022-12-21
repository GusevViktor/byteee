import React, { useEffect, useRef } from "react";
import moment, { Moment } from "moment";
import { useAnimationFrame } from "../../hooks/useAnimationFrame";
import { calcMinutes, isInRange } from "../../helpers/date";
import { LiveTimeLine } from "./LiveTimeline";

interface Props {
  startTime: number,
  endTime: number,
  setCurrentTime: (time: number) => void;
  currentTime: number;
  spaceBetweenTimelines: number;
}

export const AnimatedLiveTimeline = ({ startTime,
  endTime,
  setCurrentTime,
  currentTime,
  spaceBetweenTimelines }:Props) => {
  const lastUpdatedAtRef = useRef<Moment>(moment());
  const [start, stop] = useAnimationFrame(() => {
    const timeNow = moment();

    if (Math.abs(lastUpdatedAtRef.current.diff(timeNow)) >= 60000
      || timeNow.seconds() === 0) {
      lastUpdatedAtRef.current = timeNow;
      setCurrentTime(timeNow.valueOf());
    }
  });

  useEffect(() => {
    start();
    return () => {
      stop();
    };
  }, []);

  if (!isInRange(currentTime, startTime, endTime)) {
    return null;
  }

  const minuteInPixels = +((spaceBetweenTimelines + 1) / 15).toFixed(1);
  const minutesAmount = calcMinutes(startTime, currentTime).toFixed(1);
  const calcPosition = +minutesAmount * minuteInPixels;
  return (
    <LiveTimeLine position={calcPosition} />
  );
};