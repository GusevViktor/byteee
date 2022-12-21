import React, { ReactElement, } from "react";
import classes from "./Header.module.scss";
import LogoLink from "../../LogoLink/LogoLink";

export interface HeaderProps {
  children?: ReactElement|React.ReactNode|React.FC;
  style?:React.CSSProperties;
  className?:string;
}


const HeaderLayout = ({
  children,
}: HeaderProps) => (
  <div className={classes.container}>
    <header className={classes.header}>
      <>
        <div className={classes.logo}>
          <LogoLink path={"/"} />
        </div>
        {children}
      </>
    </header>
  </div>
);
export default HeaderLayout;
