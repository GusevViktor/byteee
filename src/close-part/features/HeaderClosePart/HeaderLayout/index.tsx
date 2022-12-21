import React, { ReactElement, } from "react";
import style from "./style.module.scss";
import LogoLink from "src/features/LogoLink/LogoLink";

export interface HeaderProps {
  children?: ReactElement|ReactElement[]|React.FC;
  style?:React.CSSProperties;
  className?:string;
}


const HeaderLayout = ({
  children,
}: HeaderProps) => (
  <div className={style.container}>
    <header className={style.header}>
      <>
        <div className={style.logo}>
          <LogoLink path={"/"} />
        </div>
        {children}
      </>
    </header>
  </div>
);
export default HeaderLayout;
