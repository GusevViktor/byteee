import React from "react";
import style from "./style.module.scss";
import { Text } from "@viktor666/byteee-kit";


const { live_wrap, live_timeline, badge } = style;

interface Props {
  position: number
}
const negHalfOfBadge = -11;
export const LiveTimeLine = ({ position }:Props) => (
  <div className={live_wrap} style={{ top: negHalfOfBadge + position }}>
    <div className={badge}>
      <Text size="s" color="mint600">
        Live
      </Text>
    </div>
    <div className={live_timeline} />
  </div>
);