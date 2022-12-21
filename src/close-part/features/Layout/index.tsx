import React, { ReactElement } from "react";
import style from "./style.module.scss";
import HeaderClosePart from "../HeaderClosePart";
import { useDesktopType, useModal } from "src/hooks";
import { ModalChat } from "../Modals";

export interface LayoutProps {
  children?: ReactElement | React.ReactNode;
  onClickChat?: () => void;
  contentClassName?: string;
  isOpenChat?: boolean;
  page?: "default" | "event-creation"
}


const { wrapper, grid_wrap, header_wrap, content } = style;


const Layout = ({ children,
  onClickChat,
  isOpenChat,
  page,
  contentClassName }: LayoutProps) => {
  const { isOpenModal, openModal, closeModal } = useModal();
  const isDesktop = useDesktopType();
  return (
    <div className={wrapper}>
      <div className={grid_wrap}>
        <div className={header_wrap}>
          <HeaderClosePart
            page={page}
            onClickChat={() => {
              if (!isDesktop){
                openModal();
              } else {
                onClickChat && onClickChat();
              }
            }}
            isOpenChat={isOpenChat}
          />
        </div>
      </div>
      <div className={`${content} ${contentClassName}`}>
        {children}
      </div>
      <ModalChat isOpen={isOpenModal} onClose={() => closeModal()} />
    </div>
  );
};


export default Layout;
