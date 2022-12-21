import React from "react";
import VerticalTabs from "src/close-part/features/VerticalTabs";
import { Icons, Text } from "@viktor666/byteee-kit";
import style from "./style.module.scss";
import Personal from "../Personal";
import { useDesktopType } from "src/hooks";
import SocialMedia from "../SocialMedia";
import Privacy from "../Privacy";
import AccessDetails from "../AccessDetails";

const { User, Heart, Lock, Settings } = Icons;

const { wrap } = style;

export interface NavBar {
  onClick: (key: React.Key | null) => void;
  activeKey: React.Key | null;
  setDirty: (dirty: boolean) => void;
}
export const NavBar = ({ onClick, activeKey, setDirty }:NavBar) => {
  const isDesktop = useDesktopType();
  return (<div className={wrap}>
    <Text size={[6, 5]} as={"h2"} font="inter" bold>Edit profile</Text>
    <VerticalTabs onClick={onClick} activeKey={activeKey}>
      <VerticalTabs.Tab
        key="personal"
        label="Personal"
        startIcon={ isDesktop && <User/>}>
        {!isDesktop && <Personal setDirty={setDirty}/>}
      </VerticalTabs.Tab>
      <VerticalTabs.Tab
        key="social-media"
        label="Social media"
        startIcon={ isDesktop && <Heart/>}>
        {!isDesktop && <SocialMedia setDirty={setDirty}/>}
      </VerticalTabs.Tab>
      <VerticalTabs.Tab
        key="privacy"
        label="Privacy"
        startIcon={isDesktop && <Lock/>}>
        {!isDesktop && <Privacy setDirty={setDirty}/>}
      </VerticalTabs.Tab>
      <VerticalTabs.Tab
        key="access"
        label="Access details"
        startIcon={ isDesktop && <Settings/>}>
        {!isDesktop && <AccessDetails/>}
      </VerticalTabs.Tab>
    </VerticalTabs>
  </div>);
};