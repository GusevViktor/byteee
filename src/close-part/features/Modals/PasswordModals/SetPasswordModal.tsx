import ModalTemplate from "../ModalTemplate";
import React from "react";
import { Button, Text } from "@viktor666/byteee-kit";
import style from "./style.module.scss";
import PasswordForm from "./PasswordForm";
import { useModal } from "src/hooks";

export interface ChangePasswordModalProps {
  onClose?: () => void;
}
const { title, info } = style;

const SetPasswordModal = ({ onClose }:ChangePasswordModalProps) => {
  const { openModal, isOpenModal, closeModal } = useModal();
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
        type="outline"
        onClick={() => {
          openModal();
        }}>
        Set password
      </Button>
    }>
      <div className={title}>
        <Text size={[6, 6, 4]} bold>Set password</Text>
      </div>
      <div className={info}>
        <Text size={"m"}>
          You can set a password to log in without a temporary code.
        </Text>
      </div>
      <PasswordForm/>
    </ModalTemplate>
  );
};
export default SetPasswordModal;