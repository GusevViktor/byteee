import React from "react";
import { Text } from "@viktor666/byteee-kit";
import style from "./style.module.scss";

interface LineUpButtonProps {
  icon: string;
  title: string;
  description: string;
  active: boolean;
  onClick: (id:string) => void;
  id: string;
}

const LineUpButton = (
  { icon, title, description, active, onClick, id }
  :LineUpButtonProps
) => (
  <button
    onClick={() => onClick(id)}
    className={[style.wrap, active && style.active].join(" ")}>
    <div className={style.icon}>
      <img src={icon} alt={"icon"} />
    </div>
    <div className={style.text}>
      <Text size={6} bold as="h4">
        {title}
      </Text>
      <Text size="m" color="grayscale800">
        {description}
      </Text>
    </div>
  </button>
);

export default LineUpButton;
