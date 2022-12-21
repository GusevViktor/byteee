import React, { useState } from "react";
import style from "./style.module.scss";
import { Icons, Text } from "@viktor666/byteee-kit";

interface EditPanelItemProps {
  icon: "box" | "user" | "clock" | "settings";
  title: string;
  children: React.ReactNode;
  separatorIsNotVisible?: boolean;
}

const EditPanelItem = (props : EditPanelItemProps) => {
  const [isOpenChildren, setIsOpenChildren] = useState(false);

  const {
    wrap,
    wrap__open,
    flex,
    icon_style,
    separator,
    icon_style__border,
    separator__open
  } = style;

  const {
    icon,
    title,
    separatorIsNotVisible = false,
    children
  } = props;

  const {
    Box,
    User,
    Clock,
    Settings,
    ChevronDown,
    ChevronUp
  } = Icons;


  const transitionIsOpenChildren = () => setIsOpenChildren(!isOpenChildren);
  // const openChildren = () => setIsOpenChildren(true);
  // const closeChildren = () => setIsOpenChildren(false);


  const getIcon = () => {
    let iconElement;
    switch (icon) {
      case "box":
        iconElement = (
          <Box color={
            isOpenChildren ? "mint500" : "white"
          }/>
        );
        break;
      case "user":
        iconElement = (
          <User color={
            isOpenChildren ? "mint500" : "white"
          }/>
        );
        break;
      case "clock":
        iconElement = (
          <Clock color={
            isOpenChildren ? "mint500" : "white"
          }/>
        );
        break;
      case "settings":
        iconElement = (
          <Settings color={
            isOpenChildren ? "mint500" : "white"
          }/>
        );
        break;
      default:
        iconElement = undefined;
    }
    return iconElement;
  };

  return (
    <>
      <div
        className={[
          wrap,
          isOpenChildren && wrap__open
        ].join(" ")}
        onClick={transitionIsOpenChildren}
      >
        <div className={flex}>
          <div className={[
            icon_style,
            isOpenChildren ? icon_style__border : ""
          ].join(" ")}>
            {getIcon()}
          </div>
          <Text color="grayscale900" size={"m"} bold>
            {title}
          </Text>
        </div>
        {!isOpenChildren && (
          <div>
            <ChevronDown color="violet600" size="m" />
          </div>
        )}
        {isOpenChildren && (
          <div>
            <ChevronUp color="violet600" size="m" />
          </div>
        )}
      </div>
      {(!separatorIsNotVisible && !isOpenChildren) && (
        <div className={separator} />
      )}
      {isOpenChildren && children}
      {(!separatorIsNotVisible && isOpenChildren) && (
        <div className={separator__open} />
      )}
    </>
  );
};

export default EditPanelItem;
