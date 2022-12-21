import React, { ReactElement } from "react";
import style from "./style.module.scss";
import ReactDOM from "react-dom";

interface ModalBackProps {
  children: ReactElement;
  isOpen: boolean,
  onClose: () => void,
  withoutBackground?: boolean,
}

const ModalBack = ({
  children, isOpen, onClose, withoutBackground=false,
}: ModalBackProps) => {
  const {
    wrap,
    background,
    children_wrap
  } = style;

  return (
    isOpen ? (
      ReactDOM.createPortal(
        <div className={wrap}>
          { !withoutBackground && <div className={background} onClick={onClose} />}
          <div className={children_wrap}>
            {children}
          </div>
        </div>
        , document.body
      )
    ) : <></>
  );
};

export default ModalBack;
