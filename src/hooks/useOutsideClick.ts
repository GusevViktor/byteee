import { useState, useEffect } from "react";

export const useOutsideClick =
  (state: boolean, node: React.MutableRefObject<HTMLDivElement | null> | null):
  boolean => {
    const [outside, setOutside] = useState(false);

    const handleClickOutside = (e: MouseEvent): void => {
      if ((e.target instanceof Node) && (node?.current?.contains(e.target))) {
        setOutside(false);
      } else {
        setOutside(true);
      }
    };

    useEffect(() => {
      if (state) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
        setOutside(false);
      }
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [state]);

    return outside;
  };

export default useOutsideClick;