import React, { useEffect, useRef, useState } from "react";
import HeaderLayout from "./HeaderLayout";
import { Avatar, Button as Bt, Icons } from "@viktor666/byteee-kit";
import classes from "./Header.module.scss";
import { ModalLoggedIn, ModalLoggedOut } from "../../../open-part/features/Modals";
import { useDesktopType, useModal } from "../../../hooks";
import HeaderNavigation from "./components/HeaderNavigation";
import DeviceDetector from "device-detector-js";
import imageGirl from "src/assets/images//girl_in_metro.png";
import HeaderMenu from "../../../close-part/features/HeaderClosePart/HeaderMenu";
import useOutsideClick from "../../../hooks/useOutsideClick";

const deviceDetector = new DeviceDetector();
const userAgent = window.navigator.userAgent;
const device = deviceDetector.parse(userAgent).device?.type;

const { Menu, ChevronDown } = Icons;

const HeaderOpenPart = () => {
  const [deviceType, setDeviceType] = useState(device);
  const { isOpenModal, openModal, closeModal } = useModal();
  const [isLogged, setIsLogged] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const isDesktop = useDesktopType();
  const node = useRef<HTMLDivElement>(null);
  const isOutside = useOutsideClick(openMenu, node);

  useEffect(() => {
    isOutside && setOpenMenu(false);
  }, [isOutside]);

  useEffect(() => {
    device && setDeviceType(device);
  }, [device]);

  useEffect(() => {
    if(isDesktop) {
      closeModal();
    }
  }, [isDesktop]);

  const renderAccountElements = () => !isLogged ? (
    <>
      <div
        className={
          deviceType === "tablet" ?
            classes.buttonTablet :`${classes.button} ${classes.buttonsSection}`
        }
      >
        <Bt
          size={"s"}
          type={"solid"}
          onClick={() => setIsLogged(true)}
          theme={"violet"}
        >
            Sign up or Log in
        </Bt>
      </div>
      <div
        onClick={ openModal}
        className={
          deviceType === "tablet" ? classes.iconButtonTablet : classes.iconButton
        }
      >
        <Menu size={"m"} color={"grayscale700"}/>
        <div className={deviceType === "tablet" ? classes.menuTablet : classes.menu}>
          Menu
        </div>
      </div>
    </> )
    :
    (
      <div onClick={ () => {
        !isDesktop && openModal();
        setOpenMenu(!openMenu);
      }} className={classes.avatar} ref={node}>
        <Avatar size={"s"} status={"offline"} alt={"avatar"} src={imageGirl}/>
        <div className={openMenu ? classes.arrowDown : classes.arrowUp}>
          <ChevronDown/>
        </div>
        {isDesktop && <HeaderMenu openMenu={openMenu}/>}
      </div>
    );
  return (
    <HeaderLayout>
      {!isLogged ? (
        <ModalLoggedOut
          onClickLogin={() => setIsLogged(true)}
          onClickSignUp={() => ""}
          isOpen={isOpenModal}
          onClose={closeModal}
        />
      ) : (
        <ModalLoggedIn
          onClickEditProfile={() => ""}
          onClickLogOut={() => setIsLogged(false)}
          isOpen={isOpenModal}
          onClose={closeModal}
          mail="Mihrtagfsell@gmail.com"
          profession="UI/UX Designer"
          company="уавыывавыавававаааGoogle ™"
        />
      )}
      <div className={deviceType === "tablet" ? classes.navTablet : classes.nav}>
        <HeaderNavigation/>
      </div>
      {renderAccountElements()}
    </HeaderLayout>
  )
  ;
};
export default HeaderOpenPart;
