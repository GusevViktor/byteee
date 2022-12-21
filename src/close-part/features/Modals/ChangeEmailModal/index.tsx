import ModalTemplate from "../ModalTemplate";
import React from "react";
import style from "./style.module.scss";
import { Button, Input, Text } from "@viktor666/byteee-kit";
import { FormikProps } from "formik/dist/types";
import { Formik } from "formik";
import { useModal } from "src/hooks";


interface FormModel {
  email: string;
}

const { input, title, submit, editButton } = style;
const ChangeEmailModal = () => {
  const { isOpenModal, closeModal, openModal } = useModal();
  const Form = ({
    handleSubmit,
    handleChange,
    values
  }: FormikProps<FormModel>) => (
    <form
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className={input}>
        <Input
          label="New mail"
          name="email"
          value={values?.email || ""}
          placeholder="Enter new mail"
          onChange={handleChange}
        />
      </div>
      <div className={submit} >
        <Button theme="violet" size="l" type="solid">Save</Button>
      </div>
    </form>);
  return (
    <ModalTemplate isOpen={isOpenModal} onClose={closeModal} OpenElement={
      <div className={editButton}>
        <Button
          type={"flat"}
          theme={"violet"}
          size={"xs"}
          onClick={() => openModal()}>
          Edit
        </Button>
      </div>}>
      <div className={title}>
        <Text size={[6, 6, 4]} bold>Change email</Text>
      </div>
      <Text size={"m"}>You can change the email you use to log in.</Text>
      <Formik<FormModel>
        initialValues={{ email: "" }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
        component={Form}
      />
    </ModalTemplate>
  );
};
export default ChangeEmailModal;