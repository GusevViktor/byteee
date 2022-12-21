import React from "react";
import { ModalBack } from "src/features/Modals";
import Chat from "src/close-part/features/Chat";
import style from "./style.module.scss";
import HeaderClosePart from "../../HeaderClosePart";
import Triangle from "./triangle.svg";

interface ModalChatProps {
  onClose: () => void;
  isOpen: boolean;
}

const ModalChat = (props: ModalChatProps) => {

  const {
    isOpen,
    onClose,
  } = props;

  return (
    <ModalBack isOpen={isOpen} onClose={onClose}>
      <div className={style.wrap}>
        <HeaderClosePart
          onClickChat={onClose}
          isOpenChat={isOpen}
        />
        <div className={style.inner}>
          <Chat
            isOpen={true}
            type="mobile"
            onClose={onClose}
          />
        </div>
        <img
          src={Triangle}
          alt={"white Triangle"}
          className={style.triangle}
        />
      </div>
    </ModalBack>
  );
};

export default ModalChat;
