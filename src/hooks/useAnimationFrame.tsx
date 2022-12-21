import { useEffect, useRef } from "react";

export const useAnimationFrame = (callback:() => void) => {
  const requestRef = useRef<number>(NaN);

  const animate = () => {
    callback();
    requestRef.current = requestAnimationFrame(animate);
  };

  const start = () => {
    requestRef.current = requestAnimationFrame(animate);
  };

  const stop = () => cancelAnimationFrame(requestRef.current);

  useEffect(() => () => cancelAnimationFrame(requestRef.current), []);

  return [start, stop];
};