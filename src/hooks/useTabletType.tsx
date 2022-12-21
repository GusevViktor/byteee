import { useEffect, useState } from "react";

export const useTabletType = () => {
  const [isTablet, setIsTablet] = useState(
    window.matchMedia( "(min-width: 768px)" ).matches
  );
  const changeMediaWidth = () => {
    const tabletDetector = window.matchMedia( "(min-width: 768px)" ).matches;
    setIsTablet(tabletDetector);
  };
  useEffect(() => {
    window.addEventListener("resize", changeMediaWidth, true);
    return () => {
      window.removeEventListener("resize", changeMediaWidth );
    };
  }, [isTablet]);
  return isTablet;
};
