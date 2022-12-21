import React from "react";
import style from "./style.module.scss";
import { Icons } from "@viktor666/byteee-kit";
const { MessageSquare } = Icons;

export interface ButtonChatProps {
  isViolet?: boolean;
  amount: number | string;
  onClick?: () => void;
}

const ButtonChat = ({ amount, onClick, isViolet = false }: ButtonChatProps) => (
  <>
    <div onClick={onClick}
      className={`
        ${style.wrap} ${ amount > 0 && style.messageBottom}
        ${isViolet && style.wrap_violet}
      `}>
      <MessageSquare size={"m"} />
      { amount > 0 && <p className={style.amount}/> }
    </div>
  </>
);

export default ButtonChat;
