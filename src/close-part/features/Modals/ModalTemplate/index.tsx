import React from "react";
import style from "./style.module.scss";
import { Icons, Text } from "@viktor666/byteee-kit";
import ModalBack from "../ModalBack/index";

const { X } = Icons;

interface ModalTemplateProps {
  children?: React.ReactNode;
  title?: string;
  description?: string | React.ReactNode;
  isOpen: boolean;
  buttons?: React.ReactNode;
  onClose: () => void;
  OpenElement?: React.ReactNode;
  className?: string;
}

const ModalTemplate = (props: ModalTemplateProps) => {

  const {
    children,
    isOpen,
    onClose,
    OpenElement,
    className,
    buttons,
    title,
    description,
  } = props;

  const { modal, cross_icon, titleStyle, descriptionStyle, buttonsSection } = style;

  const onClickButtonClose = () => {
    onClose();
  };

  return (
    <React.Fragment>
      {OpenElement !== undefined && OpenElement}
      <ModalBack isOpen={isOpen} onClose={onClose}>
        <>
          <div className={`${modal} ${className}`}>
            {
              title &&
              <div className={titleStyle}>
                <Text size={[6, 6, 4]} bold>{title}</Text>
              </div>
            }
            <div onClick={onClickButtonClose} className={cross_icon}>
              <X size="m" />
            </div>
            {
              description &&
              <div className={descriptionStyle}>
                <Text size="m">
                  {description}
                </Text>
              </div>
            }
            {children}
            {
              buttons &&
              <div className={buttonsSection}>
                {buttons}
              </div>
            }
          </div>
        </>
      </ModalBack>
    </React.Fragment>
  );
};

export default ModalTemplate;
