import { ModalTemplate } from "../../../../../close-part/features/Modals";
import style from "./style.module.scss";
import { Button, Text } from "@viktor666/byteee-kit";
import React from "react";

const { title, modalRegistrationWrap, buttons, description } = style;

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ModalEventRegistration = ({ isOpen, onClose }: Props) => (
  <ModalTemplate isOpen={isOpen} onClose={onClose} className={modalRegistrationWrap}>
    <div className={title}>
      <Text size={[6, 6, 4]} bold>You’ve got a ticket!</Text>
    </div>
    <div className={description}>
      <Text size="m">
      Now you can enter the event space to see what’s inside or
      stay on the landing page and continue browsing the Event catalog.
      </Text>
    </div>
    <div className={buttons}>
      <Button size="s" type="solid">
        Enter event
      </Button>
      <Button
        size="s"
        type="outline"
        onClick={onClose}
      >
        Stay here
      </Button>
    </div>
  </ModalTemplate>
);
export default ModalEventRegistration;