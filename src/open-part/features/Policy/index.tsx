import React from "react";
import style from "./style.module.scss";
import { Text, TextOP } from "@viktor666/byteee-kit";

export const getMainTitle = (title: string) => (
  <div className={style.main_title}>
    <TextOP
      as="h1" size={[5, 5, 3, 3, 3, 2, 1]} bold font="sangbleu">
      {title}
    </TextOP>
  </div>
);

export const getTitle = (title: string) => (
  <div className={style.title}>
    <TextOP as="h4" bold font="inter" size={[6, 6, 5]}>
      {title}
    </TextOP>
  </div>
);
export const getText = (text: string, bold?: boolean) => (
  <Text size="m" bold={bold} as="span">
    {text}
  </Text>
);
export const getListItem = (title: string, text: string) => (
  <li>
    {title && getText(title, true)}
    {getText(text)}
  </li>
);
export const getList = ( list: string[][], no_margin?: boolean) => (
  <ul className={[
    style.list,
    no_margin ? style.no_margin_b : "",
  ].join(" ")}>
    {list.map((arr) => arr.length > 1 ?
      getListItem(arr[0], arr[1]) : getListItem("", arr[0]))}
  </ul>
);