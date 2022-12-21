import React, { useEffect, useRef, useState } from "react";
import HeaderLayout from "./HeaderLayout";
import { Avatar, Button, Icons } from "@viktor666/byteee-kit";
import style from "./style.module.scss";
import imageGirl from "src/assets/images/girl_in_metro.png";
import ButtonChat from "./ButtonChat";
import useOutsideClick from "src/hooks/useOutsideClick";
import HeaderMenu from "./HeaderMenu";

export interface HeaderProps {
  onClickChat?: () => void;
  isOpenChat?: boolean;
  page?: "default" | "event-creation"
}
const { ChevronDown } = Icons;
const HeaderClosePart = ({ onClickChat,
  isOpenChat = false,
  page } : HeaderProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  const node = useRef<HTMLDivElement>(null);
  const isOutside = useOutsideClick(openMenu, node);

  useEffect(() => {
    isOutside && setOpenMenu(false);
  }, [isOutside]);

  const renderAccountElements = () => (
    <div className={style.buttonsSection}>
      { page === "event-creation" ? "" :
        <>
          <div className={style.button}>
            <Button size={"s"} type="outline" startIcon={"Plus"} theme={"violet"}>
          Create event
            </Button>
          </div>
          <ButtonChat
            isViolet={openMenu || isOpenChat}
            amount={1000}
            onClick={onClickChat}
          />
        </>
      }
      <div ref={node} className={style.avatarCp} onClick={() => {
        setOpenMenu(!openMenu);
      }}>
        <Avatar size={"s"} status={"offline"} alt={"avatar"} src={imageGirl}/>
        <div className={openMenu ? style.arrowDown : style.arrowUp}>
          <ChevronDown/>
        </div>
        <div>
          <HeaderMenu openMenu={openMenu}/>
        </div>
      </div>
    </div>
  );
  return (
    <HeaderLayout>
      {renderAccountElements()}
    </HeaderLayout>
  )
  ;
};

export default HeaderClosePart;