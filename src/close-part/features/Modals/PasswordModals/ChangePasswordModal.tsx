import ModalTemplate from "../ModalTemplate";
import React from "react";
import { Button, Text } from "@viktor666/byteee-kit";
import style from "./style.module.scss";
import PasswordForm from "./PasswordForm";
import { useModal } from "src/hooks";


const { title } = style;

const ChangePasswordModal = () => {
  const { openModal, isOpenModal, closeModal } = useModal();
  return (
    <ModalTemplate isOpen={isOpenModal} onClose={closeModal} OpenElement={
      <Button
        size="m"
        theme="violet"
        type="outline"
        onClick={() => {
          openModal();
        }}>
        Change password
      </Button>
    }>
      <div className={title}>
        <Text size={[6, 6, 4]} bold>Change password</Text>
      </div>
      <PasswordForm/>
    </ModalTemplate>
  );
};
export default ChangePasswordModal;