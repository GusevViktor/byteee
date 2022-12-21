import React from "react";
import { Button, Input, Text } from "@viktor666/byteee-kit";
import { FormikProps } from "formik/dist/types";
import { Formik } from "formik";
import style from "./style.module.scss";


interface FormModel {
  password: string;
  copyPassword:string;
}
const { inputs, submit, list } = style;

const PasswordForm = () => {
  const Form = ({
    handleSubmit,
    handleChange,
    values,
    errors,
    touched
  }: FormikProps<FormModel>) => (
    <form
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className={inputs}>
        <Input
          label="New password"
          name="password"
          value={values?.password || ""}
          placeholder="Enter new mail"
          onChange={handleChange}
          type="password"
          error={errors.password && touched.password ? errors?.password || "" : ""}
        />
        <Input
          label="Repeat new password"
          name="copyPassword"
          value={values?.copyPassword || ""}
          placeholder="Enter new mail"
          onChange={handleChange}
          type="password"
          error={errors.copyPassword && touched.copyPassword
            ? errors?.copyPassword || "" : ""}
        />
      </div>
      <div className={submit}>
        <Button theme="violet" size="l" type="solid">Save</Button>
      </div>
    </form>);
  return (
    <>
      <Text size={"m"}>Password should contain: </Text>
      <ul className={list}>
        <li>
          <Text size={"m"}>
          Minimum 8 symbols
          </Text>
        </li>
        <li>
          <Text size={"m"}>
            At least 1 letter
          </Text>
        </li>
        <li>
          <Text size={"m"}>
            At least 1 number
          </Text>
        </li>
      </ul>
      <Formik<FormModel>
        initialValues={{ password: "", copyPassword: "" }}
        validateOnChange={true}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
        validate={(values) => {
          const errors: { [key: string]: string } = {};
          if (values.password !== values.copyPassword) {
            errors.copyPassword = "Passwords do not match";
          } else if(values.password.length < 8 ){
            errors.password = "Too short";
          } else if(values.copyPassword.length < 8 ){
            errors.copyPassword = "Too short";
          }
          return errors;
        }}
        component={Form}
      />
    </>
  );
};
export default PasswordForm;