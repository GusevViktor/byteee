import React, { ReactElement, useState } from "react";
import style from "./style.module.scss";
import Footer from "./Footer/Footer";
import HeaderOpenPart from "./Header/HeaderOpenPart";
import { ModalAlert } from "../Modals";

export type typeAlert = "success" | "error"

export interface LayoutProps {
  children?: ReactElement | React.ReactNode;
  gridTemplate?: boolean;
  classNameWrap?: string;
  footer?: boolean;
  alert?: typeAlert ;
  completed?: typeAlert;
}
const Layout = ({ children,
  gridTemplate,
  footer = true,
  alert,
  classNameWrap }: LayoutProps) => {
  const [isOpenModalAlert, setIsModalAlert] = useState(true);
  return (
    <div className={`${style.wrapper} ${classNameWrap}`}>
      <div className={style.grid_wrap}>
        <div className={style.header_wrap}>
          <HeaderOpenPart/>
        </div>
      </div>
      <div
        className={
          [gridTemplate && style.content__template, style.content].join(" ")
        }
      >
        {children}
      </div>
      {alert &&
        <ModalAlert
          onClose={() => setIsModalAlert(false)}
          isOpen={isOpenModalAlert}
          completed={alert}
        />
      }
      {footer && <Footer/>}
    </div>
  );
};

export default Layout;
