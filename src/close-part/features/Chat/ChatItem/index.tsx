import React, { useState } from "react";
import styles from "./style.module.scss";
import { Avatar, Text, Icons } from "@viktor666/byteee-kit";


interface ChatItemProps {
  isPerson: boolean,
  name: string,
  icon: string,
  message: string,
  time: string,
  countUnread: number,
  isOnline?: boolean,
  isVerified?: boolean,
  isWarning?: boolean,
  violetSubString?: string,
  isRead?: boolean,
  onClick: () => void,
  onDelete: () => void,
}


const ChatItem = (props: ChatItemProps) => {

  const [isOpenDelete, setIsOpenDelete] = useState(false);

  const {
    AlertCircle,
    Check,
    UserCheck,
  } = Icons;

  const {
    wrap,
    inner,
    info,
    time_style,
    unread,
    name_style,
    message_style,
    check,
    warning,
    row,
    row_left_side,
    row_right_side,
    avatar,
    delete_button
  } = styles;

  const {
    name,
    icon,
    message,
    time,
    countUnread,
    isOnline,
    isVerified,
    isRead,
    isWarning,
    onClick,
    onDelete,
    isPerson,
    violetSubString = "",
  } = props;

  const onDeleteButton = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onDelete();
  };

  const onClickItem = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if(e.type === "contextmenu") {
      setIsOpenDelete(true);
      window.setTimeout(() => setIsOpenDelete(false), 4000);
    } else {
      onClick();
    }
  };

  const getName = (text: string) => {
    if(violetSubString) {
      const texts = text.
        replaceAll(violetSubString, `&${violetSubString}&`).
        split("&");
      return (
        <div>
          {texts.map((item, index) => (
            <Text
              as="span"
              key={`${item}${index}`}
              size="m"
              color={item === violetSubString ? "violet600" : "grayscale1000"}>
              {item}
            </Text>
          ))}
        </div>
      );
    }
    return (
      <Text
        size="m"
        color="grayscale1000">
        {text}
      </Text>
    );
  };

  return (
    <div className={wrap}>
      {isOpenDelete && (
        <button
          className={[
            delete_button,
          ].join(" ")}
          onClick={(e: React.MouseEvent<HTMLElement>) => onDeleteButton(e)}
        >
          <Text size="m" color="red600">
            {`Delete ${isPerson ? "dialog" : "group"}`}
          </Text>
        </button>
      )}
      <div
        className={inner}
        onClick={(e: React.MouseEvent<HTMLElement>) => onClickItem(e)}
        onContextMenu={(e: React.MouseEvent<HTMLElement>) => onClickItem(e)}
      >

        <Avatar
          src={icon}
          size="m"
          status={isOnline ? "online" : "offline"}
          alt={`Icon: ${name}`}
          className={avatar}
        />
        <div className={info}>
          <header className={row}>
            <div className={row_left_side}>
              <div className={name_style}>
                <Text size="m" color="grayscale1000">
                  {getName(name)}
                </Text>
              </div>
              {(isVerified && isPerson) && (
                <UserCheck size="s" color="grayscale600" />
              )}
            </div>
            <div className={row_right_side}>
              {!isPerson && (
                <Text size="xs" color="grayscale600">
                Event&nbsp;group
                </Text>
              )}
              <div className={check}>
                <Check color={isRead ? "violet500" : "grayscale400"} />
              </div>
              <div className={time_style}>
                <Text color="grayscale400" size="xs">
                  {time}
                </Text>
              </div>
            </div>
          </header>
          <footer className={row}>
            <div className={row_left_side}>
              {isWarning ? (
                <div className={warning}>
                  <AlertCircle size="s" color="tangerine1000" />
                  <Text size="xs" color="tangerine1000">
                    {message}
                  </Text>
                </div>
              ) : (
                <div className={message_style}>
                  <Text size="xs" color="grayscale600">
                    {message}
                  </Text>
                </div>
              )}
            </div>
            <div className={unread}>
              <Text color="white" size="xs">
                {countUnread}
              </Text>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
export default ChatItem;