import { useEffect, useState } from "react";

export const useDesktopType = () => {
  const [isDesktop, setIsDesktop] = useState(
    window.matchMedia( "(min-width: 1280px)" ).matches
  );
  const changeMediaWidth = () => {
    const desktopDetector = window.matchMedia( "(min-width: 1280px)" ).matches;
    setIsDesktop(desktopDetector);
  };
  useEffect(() => {
    window.addEventListener("resize", changeMediaWidth, true);
    return () => {
      window.removeEventListener("resize", changeMediaWidth );
    };
  }, [isDesktop]);
  return isDesktop;
};
