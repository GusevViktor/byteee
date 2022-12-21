import React from "react";
import Chat, { ChatProps } from "..";
import styles from "./style.module.scss";

const ChatFull = (props: ChatProps) => {

  const {
    wrap,
  } = styles;

  return (
    <div className={wrap}>
      <Chat {...props} />
    </div>
  );
};

export default ChatFull;
