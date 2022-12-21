import React from "react";
import style from "./style.module.scss";
import { Icons } from "@viktor666/byteee-kit";

export interface MuteBellButtonProps {
  isMute: boolean;
  onClick: (isMute: boolean) => void;
}

const MuteBellButton = ({ isMute, onClick }: MuteBellButtonProps) => {

  const { Bell, BellOff } = Icons;

  const { wrap } = style;

  const onClickButton = () => onClick(isMute);

  return (
    <button className={wrap} onClick={onClickButton}>
      {isMute ? (
        <BellOff size="m" color="violet600" />
      ) : (
        <Bell size="m" color="violet600" />
      )}
    </button>
  );
};

export default MuteBellButton;