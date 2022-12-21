import React from "react";
import style from "./style.module.scss";
import { Text } from "@viktor666/byteee-kit";

interface Props {
  size: "s" | "m" | "time",
  time?: string,
}
const { line_time_wrap, small, medium } = style;

export const TimeLine = ({ size, time }: Props) => time ?
  (
    <div className={size === "time" ? line_time_wrap : ""}>
      <Text size="s" color="grayscale500">
        {time}
      </Text>
    </div>
  )
  :
  (
    <div className={size === "s" ? small : medium} />
  );