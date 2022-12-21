import { Button, Text, Avatar } from "@viktor666/byteee-kit";
import React from "react";
import ModalTemplate from "../../Modals/ModalTemplate";
import style from "./style.module.scss";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  name: string,
  icon: string,
}
const { modalWrap } = style;

const RemoveSpeakerModal = (
  { isOpen, onClose, onSuccess, icon, name }: ModalProps
) => (
  <ModalTemplate
    isOpen={isOpen}
    onClose={onClose}
    className={modalWrap}
    title="Remove speaker?"
    description="You are about to remove the following speaker:"
    buttons={
      <>
        <Button
          size="m"
          type="solid"
          onClick={onSuccess}
        >
          Remove
        </Button>
        <Button
          size="m"
          type="outline"
          onClick={onClose}
        >
          Cancel
        </Button>
      </>
    }>
    <div className={style.name_item}>
      <Avatar
        status="offline"
        size="m"
        src={icon}
        alt={`Icon: ${name}`}
      />
      <div className={style.name_style}>
        <Text size="m">
          {name}
        </Text>
      </div>
    </div>
    <div className={style.description}>
      <Text size="m">
        {"They will get an email notification "+
          "that their performance is cancelled, and "+
          "all sessions assigned to them will be deleted from the event schedule."}
      </Text>
    </div>
  </ModalTemplate>
);
export default RemoveSpeakerModal;