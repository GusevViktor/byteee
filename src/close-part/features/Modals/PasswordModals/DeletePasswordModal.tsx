import ModalTemplate from "../ModalTemplate";
import React from "react";
import { Button, Text } from "@viktor666/byteee-kit";
import style from "./style.module.scss";
import { useModal } from "src/hooks";

const { title, attention, submit } = style;

export interface Props {
  onClose?: () => void;
}

const DeletePasswordModal = ({ onClose }:Props) => {
  const { isOpenModal, closeModal, openModal } = useModal();
  return (
    <ModalTemplate isOpen={isOpenModal} onClose={() => {
      closeModal;
      if (onClose) {
        onClose();
      }
    }} OpenElement={
      <Button
        size="m"
        theme="violet"
        type="flat"
        onClick={() => {
          openModal();
        }}>
        Delete password
      </Button>}>
      <div className={title}>
        <Text size={[6, 6, 4]} bold>Delete password</Text>
      </div>
      <div className={attention}>
        <Text size={"m"}>
          After you delete your password, you will be able to log in via
          a one-time temporary code we will send to your email.
        </Text>
      </div>
      <div className={submit}>
        <Button type="solid" theme="violet" size="l">
        Delete
        </Button>
      </div>
    </ModalTemplate>
  );
};
export default DeletePasswordModal;