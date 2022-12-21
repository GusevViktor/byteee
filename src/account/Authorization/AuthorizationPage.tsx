import React, { ReactElement, useRef } from "react";
import Layout from "src/features/Layout";
import classes from "../userAccess.module.scss";

import { Button, Input, Text } from "@viktor666/byteee-kit";

import Link from "../../features/Link";
import { Formik } from "formik";
import { FormikProps } from "formik/dist/types";
import PinInput from "../features/PinInput/PinInput";
import { UserAccessHook } from "../../hooks";
import { FormModel } from "../../hooks/UserAccessHook";

const AuthorizationPage = (): ReactElement => {
  const [{ isValidEmail, passwordType }, { validateEmail, login }, onUpdate] =
    UserAccessHook();


  const ref = useRef<HTMLInputElement>();

  const AuthorizationForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    setFieldValue,
  }: FormikProps<FormModel>) => (
    <form onSubmit={handleSubmit} className={classes.submitForm}>
      <Input
        label={"Email"}
        name="email"
        value={values?.email || ""}
        placeholder={"nickname@email.com"}
        onChange={(e) => {
          onUpdate("email");
          handleChange(e);
        }}
        error={errors.email && touched.email ? errors?.email || "" : ""}
        type={"email"}
      />

      {isValidEmail && passwordType === "password" ? (
        <Input
          label={"Password"}
          name={"password"}
          value={values?.password || ""}
          placeholder={"Enter password"}
          onChange={handleChange}
          error={errors.password && touched.password ? errors?.password || "" : ""}
          type={"password"}
        />
      ) : (
        ""
      )}
      {isValidEmail && passwordType === "code" ? (
        <>
          <div className={classes.check_inbox}>
            <Text as={"p"} size={"xs"} color={"grayscale900"}>
              We’ve sent you a temporary code.
              <br />
              Please check your inbox
            </Text>
          </div>
          <PinInput
            ref={ref}
            digits={values.code!}
            type={"text"}
            error={true}
            onChange={(value) => {
              setFieldValue("code", value);
            }}
          />
        </>
      ) : (
        ""
      )}

      <Button
        size={"m"}
        type={"solid"}
        className={`${classes.mb} ${classes.mt}`}
      >
        Continue
      </Button>
      <Button type={"flat"} theme={"violet"} size={"m"} className={classes.mb}>
        {passwordType === "password" ? "Forgot password?" : "Resend code"}
      </Button>
    </form>
  );

  return (
    <Layout footer={false} gridTemplate={true}>
      <>
        <div className={classes.container}>
          <div className={classes.title}>
            <Text size={[5, 5, 4, 3, 3, 2]} bold={true}>
              Log in
            </Text>
          </div>
          <Button
            size={"m"}
            type={"outline"}
            startIcon="Google"
            className={classes.google_button}
          >
            Continue with Google
          </Button>
          <div className={classes.separator}>
            <hr className="solid" />
            or
            <hr className="solid" />
          </div>
          <Formik<FormModel>
            initialValues={{ email: "", password: "", code: ["", "", "", ""] }}
            validateOnChange={false}
            validate={(values) => {
              const errors: { [key: string]: string } = {};
              if (!values.email) {
                errors.email = "Please enter your email";
              } else if (
                // eslint-disable-next-line max-len
                !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                  values.email
                )
              ) {
                errors.email = "The email format is incorrect";
              } else if (
                isValidEmail &&
                passwordType === "password" &&
                (!values.password || (values.password && values.password.length < 5))
              ) {
                //Todo
                errors.password = "The password is incorrect. Please try again";
              } else if (!values.code && passwordType === "code") {
                errors.code = "The code is incorrect. Please try again";
              }
              return errors;
            }}
            onSubmit={(values) => {
              const email = String(values.email);
              if (!isValidEmail) {
                validateEmail(email);
                return;
              } else {
                login(values);
              }
            }}
            component={AuthorizationForm}
          />
          <div className={classes.agreement}>
            <Text size={["xs", "xs", "xs", "xs", "xs", "xs", "s"]}>
              By clicking “Continue”, you acknowledge that you have read, understood
              and agree to the byteee{" "}
              <Link to={"/service-terms"} color={"violet"} style={{ fontSize: 13 }}>
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link to={"/privacy-policy"} color={"violet"} style={{ fontSize: 13 }}>
                Policy Policy
              </Link>
            </Text>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default AuthorizationPage;
