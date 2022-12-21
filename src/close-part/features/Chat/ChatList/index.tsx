import React from "react";
import moment from "moment";
import styles from "./style.module.scss";
import ChatItem from "../ChatItem";
import { ChatI } from "../ChatDialogs";

interface ChatListProps {
  data: ChatI[];
  onClick: (item: ChatI) => void;
  onDelete: (item: ChatI) => void;
  searchValue: string,
}

const ChatList = (props: ChatListProps) => {
  const { item_style, wrap } = styles;
  const { onClick, onDelete, data, searchValue } = props;
  return(
    <div className={wrap}>
      {data.map(item => {
        const {
          messages,
          name,
          icon,
          type,
          isOnline = false,
          isVerified = false,
          isWarning = false,
          isRead = false,
          isMute = false,
        } = item;
        const messagesLength = messages.length - 1;
        const propsChatItem = {
          name,
          icon,
          type,
          message: messages[
            messagesLength][messages[messagesLength].length - 1].message,
          time: moment(
            messages[messagesLength][messages[messagesLength].length - 1].date
          ).format("HH:mm"),
          countUnread: messagesLength,
          isPerson: type === "person",
          ...(type === "person" && { isOnline }),
          ...(type === "person" && { isVerified }),
          ...(type === "person" && { isRead }),
          ...(type === "group" && { isMute }),
          ...(type === "group" && { isWarning }),
        };
        return (
          <div
            key={`
              ${propsChatItem.message}${propsChatItem.time}${propsChatItem.name}
            `}
            className={item_style}
          >
            <ChatItem
              {...propsChatItem}
              onClick={() => onClick(item)}
              onDelete={() => onDelete(item)}
              violetSubString={searchValue}
            />
          </div>
        );
      })}
    </div>
  );
};
export default ChatList;