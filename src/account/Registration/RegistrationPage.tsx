import React, { ReactElement, useRef, useState } from "react";
import Layout from "src/features/Layout";
import classes from "../userAccess.module.scss";
import { Button, Input, Text } from "@viktor666/byteee-kit";
import Link from "../../features/Link";
import { Formik } from "formik";
import { FormikProps } from "formik/dist/types";
import PinInput from "../features/PinInput/PinInput";
import { UserAccessHook } from "../../hooks";
import { FormModel } from "../../hooks/UserAccessHook";
import { ChooseTypePassword } from "../components/ChooseTypePassword";

const RegistrationPage = (): ReactElement => {
  const [
    { isValidEmail, passwordType },
    { validateEmail, signup, login },
    onUpdate,
  ] = UserAccessHook();

  const [isFinishedRegistration, setFinishedRegistration] = useState<boolean>(false);

  const ref = useRef<HTMLInputElement>();

  const RegistrationForm = ({
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
        <>
          <div className={classes.check_inbox}>
            <Text as={"p"} size={"xs"} color={"grayscale900"}>
              You’ve already signed up with us. <br />
              Enter your password to log in
            </Text>
          </div>
          <Input
            label={"Password"}
            name={"password"}
            value={values?.password || ""}
            placeholder={"Enter password"}
            onChange={handleChange}
            error={errors.password && touched.password ? errors?.password || "" : ""}
            type={"password"}
          />
        </>
      ) : (
        ""
      )}
      {(isValidEmail && passwordType === "code") || isValidEmail === false ? (
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
            onChange={(e) => {
              setFieldValue("code", e);
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
      {isValidEmail === true && passwordType === "password" ? (
        <Button type={"flat"} theme={"violet"} size={"m"} className={classes.mb}>
          Forgot password?
        </Button>
      ) : (
        <Button type={"flat"} theme={"violet"} size={"m"} className={classes.mb}>
          Resend code
        </Button>
      )}
    </form>
  );

  return (
    <Layout footer={false} gridTemplate={true}>
      {isFinishedRegistration === true ? (
        <ChooseTypePassword />
      ) : (
        <div className={classes.container}>
          <div className={classes.title}>
            <Text size={[5, 5, 4, 3, 3, 2]} bold={true}>
              Sign up
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
                // Signup(values);
              }
              if (values.code) {
                setFinishedRegistration(true);
                signup(values);
                // Todo signup(values);
              } else {
                login(values);
              }
            }}
            component={RegistrationForm}
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
      )}
    </Layout>
  );
};

export default RegistrationPage;
