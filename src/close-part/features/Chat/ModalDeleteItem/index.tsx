import React from "react";
import { ModalBack } from "src/features/Modals";
import { ChatI } from "../ChatDialogs";
import style from "./style.module.scss";
import { Button, Avatar, Text, Icons } from "@viktor666/byteee-kit";

interface ModalChatProps {
  item: ChatI;
  onClose: () => void;
  isOpen: boolean;
  onClickDelete: () => void;
}

const ModalChat = (props: ModalChatProps) => {
  const {
    wrap,
    title,
    description,
    avatar_wrap,
    avatar_text,
    buttons,
    button_delete,
    close_x,
  } = style;

  const {
    isOpen,
    item,
    onClose,
    onClickDelete,
  } = props;

  const {
    icon,
    name,
    type,
  } = item;

  const {
    X,
  } = Icons;

  const isGroup = type === "group";

  return (
    <ModalBack
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className={wrap}>
        <div className={close_x} onClick={onClose}>
          <X size="m" />
        </div>
        <div className={title}>
          <Text size={4} bold>
            {isGroup ? "Delete this group?" : "Delete this dialogue?"}
          </Text>
        </div>
        <div className={description}>
          <Text size="m">
            {isGroup ? (
              "You will leave the following event group and delete it from "+
              "your list of conversations. This action cannot be undone."
            ) : ("You will delete your copy of the conversation with the " +
                 "following person.This action cannot be undone.")}
          </Text>
        </div>
        <div className={avatar_wrap}>
          <Avatar
            src={icon}
            size="m"
            status="offline"
            alt={`Icon: ${name}`}
          />
          <div className={avatar_text}>
            {name}
          </div>
        </div>
        <div className={buttons}>
          <Button
            type="outline"
            theme="violet"
            onClick={onClose}
          >
            Cancel
          </Button>
          <div className={button_delete}>
            <Button
              type="solid"
              theme="red"
              onClick={onClickDelete}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </ModalBack>
  );
};

export default ModalChat;
