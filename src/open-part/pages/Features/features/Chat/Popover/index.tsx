import React, { ReactElement } from "react";
import styles from "./style.module.scss";
import { Text } from "@viktor666/byteee-kit";

export interface PopoverProps {
  name: string;
  message: string|ReactElement;
  avatar: ReactElement;
  className?:string;
  anchorOrigin: "right"|"left";
  children?:ReactElement;
  style?:React.CSSProperties;
}

const Popover: React.FC<PopoverProps> = ({
  name,
  children,
  message,
  avatar,
  anchorOrigin,
  className,
  style
}) => (
  <div
    className={[
      className,
      styles.container,
      styles[anchorOrigin]
    ].join(" ")}
    style={style}
  >
    <div className={styles.profile}>
      <div>
        {avatar}
      </div>
      <div className={styles.text}>
        <div className={styles.name}>{name}</div>
        <div className={styles.message}>
          <Text size={["s", "s", "m", "xs", "m"]} as={"span"}>{message}</Text>
        </div>
      </div>
    </div>
    {children}
  </div>
);

export default Popover;
