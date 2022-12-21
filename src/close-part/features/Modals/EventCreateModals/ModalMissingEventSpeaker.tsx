import { Button } from "@viktor666/byteee-kit";
import React from "react";
import ModalTemplate from "../../Modals/ModalTemplate";
import style from "./style.module.scss";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const { modalWrap } = style;

const ModalMissingEventSpeaker = ({ isOpen, onClose, onSuccess }: ModalProps) => (
  <ModalTemplate
    isOpen={isOpen}
    onClose={onClose}
    className={modalWrap}
    title="Event has no speaker"
    description="As an event cannot exist without at least one speaker,
      we’ll show you as a speaker on the event landing page.
      You are free to change your mind and invite other speakers
      any time before the event starts."
    buttons={
      <>
        <Button
          size="m"
          type="solid"
          onClick={onSuccess}
        >
        Got it
        </Button>
        <Button
          size="m"
          type="outline"
          onClick={onClose}
        >
      Cancel
        </Button>
      </>
    }
  >
  </ModalTemplate>
);
export default ModalMissingEventSpeaker;