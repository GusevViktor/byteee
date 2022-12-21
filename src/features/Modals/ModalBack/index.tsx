import React, { ReactElement } from "react";
import style from "./style.module.scss";
import ReactDOM from "react-dom";

interface ModalBackProps {
  className?: string;
  children: ReactElement;
  isOpen: boolean,
  onClose: () => void,
  withoutBackground?: boolean,
}

export const ModalBack = ({
  children, isOpen, onClose, withoutBackground=false,
}: ModalBackProps) => {
  const {
    wrap,
    background,
  } = style;

  return (
    isOpen ? (
      ReactDOM.createPortal(
        <div className={wrap}>
          { !withoutBackground && <div className={background} onClick={onClose} />}
          {children}
        </div>
        , document.body
      )
    ) : <></>
  );
};