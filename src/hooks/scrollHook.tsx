import { RefObject, useEffect, useState } from "react";

export interface Elements{
  key: string;
}
function isInViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const elements: Record<string, HTMLElement> = {};
const setters: Record<string, (status:boolean) => void> = {};

const onScroll = () => {
  Object.keys(elements).forEach((key) => {
    if (elements[key] && isInViewport(elements[key])) {
      setters[key](true);
    }
  });
};

let isScrollListenerExist = false;

export const useScrollHook = (name: string, ref: RefObject<HTMLElement>) => {
  const [startAnimation, setStartAnimation] = useState(false);
  useEffect(() => {
    if (ref.current) {
      elements[name] = ref.current;
    }
    setters[name] = setStartAnimation;
    if (!isScrollListenerExist) {
      document.addEventListener("scroll", onScroll);
      isScrollListenerExist = true;
    }
  }, []);
  return startAnimation;
};
