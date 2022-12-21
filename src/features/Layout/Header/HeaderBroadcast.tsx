import React from "react";
import HeaderLayout from "./HeaderLayout";
import { Avatar, Button, Icons } from "@viktor666/byteee-kit";
import classes from "./Header.module.scss";
import imageGirl from "src/assets/images//girl_in_metro.png";

const { LogOut, ChevronDown } = Icons;
const HeaderBroadcast = () => {

  const renderAccountElements = () => (
    <div className={classes.buttonsSection}>
      <div className={classes.button}>
        <Button size={"s"} type={"flat"} startIcon={"LogOut"} theme={"black"}>
          Exit event
        </Button>
      </div>
      <div className={classes.exitIcon}>
        <LogOut size={"m"} color={"grayscale700"}/>
      </div>
      <div className={classes.avatarCp}>
        <Avatar size={"s"} status={"offline"} alt={"avatar"} src={imageGirl}/>
        <div>
          <ChevronDown/>
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
export default HeaderBroadcast;