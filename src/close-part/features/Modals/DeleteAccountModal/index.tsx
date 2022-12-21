import ModalTemplate from "../ModalTemplate";
import React from "react";
import { Button, Text } from "@viktor666/byteee-kit";
import style from "./style.module.scss";
import { useModal } from "src/hooks";

const { title, attention, buttons } = style;

export interface Props {
  onOpen: (open:() =>void) => void;
}

const DeleteAccountModal = ({ onOpen }:Props) => {
  const { isOpenModal, closeModal, openModal } = useModal();
  return (
    <ModalTemplate isOpen={isOpenModal} onClose={closeModal} OpenElement={
      <Button
        size={"m"}
        theme={"red"}
        type={"outline"}
        onClick={() => {
          onOpen && onOpen(openModal);
        }
        }>
        Delete account
      </Button>}>
      <div className={title}>
        <Text size={[6, 6, 6, 6, 4]} bold>Delete account</Text>
      </div>
      <div className={attention}>
        <Text size="m">
          This is a serious step.
          You won’t be able to restore your account after
          you press that red button below.
        </Text>
      </div>
      <div className={buttons}>
        <Button type="solid" theme="red" size="l">
          Delete
        </Button>
        <Button type="outline" theme="red" size="l">
          Cancel
        </Button>
      </div>
    </ModalTemplate>
  );
};
export default DeleteAccountModal;