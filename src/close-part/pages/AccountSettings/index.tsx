import Layout from "src/close-part/features/Layout";
import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import { NavBar } from "./features/NavBar";
import { useNavigate, Outlet, useMatch } from "react-router-dom";
import { SaveChangesModal } from "src/close-part/features/Modals";
import { Button } from "@viktor666/byteee-kit";
import ChatFull from "src/close-part/features/Chat/ChatFull";

const { grid_left, grid_center, grid_right, submit, hideScroll } = style;


const AccountSettings = () => {
  const [isDesktop, setIsDesktop] = useState(
    window.matchMedia( "(min-width: 1280px)" ).matches
  );
  const match = useMatch("/account-settings/:param");
  const [dirty, setDirty] = useState<boolean>(false);
  const navigate: any = useNavigate();
  const [isOpenChat, setIsOpenChat] = useState<boolean>(true);
  const changeIsOpen = () => setIsOpenChat(!isOpenChat);

  const changeMediaWidth = () => {
    const desktopDetector = window.matchMedia( "(min-width: 1280px)" ).matches;
    setIsDesktop(desktopDetector);
  };

  useEffect(() => {
    if (match === null && isDesktop ){
      navigate("personal");
    }
    window.addEventListener("resize", changeMediaWidth, true);
    return () => {
      window.removeEventListener("resize", changeMediaWidth );
    };
  }, [isDesktop]);

  useEffect(() => {
    const beforeUnloadFunction = (e:BeforeUnloadEvent) => {
      if (!dirty) {
        return;
      }
      e.returnValue = true;
      return true;
    };
    window.addEventListener("beforeunload", beforeUnloadFunction);
    return () => {
      window.removeEventListener("beforeunload", beforeUnloadFunction);
    };
  }, []);

  const changeTab = (key: React.Key | null) => {
    if (key === String(match?.params.param) && !isDesktop) {
      navigate("");
    } else {
      navigate(key);
    }
  };

  return (
    <div className={hideScroll}>
      <Layout onClickChat={changeIsOpen}>
        <div className={grid_left}>
          <NavBar
            activeKey={String(match?.params.param)}
            onClick={changeTab}
            setDirty={setDirty}/>
          <SaveChangesModal
            dirty={dirty}
            setDirty={setDirty}/>
        </div>
        <div className={grid_center}>
          {isDesktop && <Outlet context={setDirty}/>}
        </div>
        <div className={grid_right}>
          <ChatFull onClickHeader={changeIsOpen} isOpen={isOpenChat} type="desktop"/>
        </div>
      </Layout>
      <div className={submit}>
        <Button size="m" theme={"violet"} type={"solid"}>Save changes</Button>
      </div>
    </div>
  );
};
export default AccountSettings;