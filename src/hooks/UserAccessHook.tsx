import React from "react";
import api from "../api/api";

export interface FormModel {
  password?: string;
  email?: string;
  code?: [string, string, string, string];
}

export const UserAccessHook = (): [
  { isValidEmail: boolean | undefined; passwordType: string },
  {
    validateEmail: (email: string) => void;
    login: (values: FormModel) => void;
    signup: (values: FormModel) => void;
  },
  (property: string) => void
] => {
  const [isValidEmail, setIsValidEmail] = React.useState<boolean | undefined>(
    undefined
  );

  const [passwordType, setPasswordType] = React.useState<"password" | "code">(
    "password"
  );

  const validateEmail = (email: string): void => {
    api.validateByEmail(email).then((validationResponse) => {
      setIsValidEmail(validationResponse.isValid);
      setPasswordType(validationResponse.passwordType);
    });
  };

  const stateFormUpdate = (property: string): void => {
    if (property === "email") {
      setIsValidEmail(false);
    }
  };

  const login = (values: FormModel) => {
    const user = api.loginByEmail(
      String(values.email),
      String(
        passwordType === "password" ? String(values.password) : values.code?.join("")
      ),
      passwordType
    );

    if (user?.user) {
      alert("Success"); //Todo redirect to account page
    } else {
      alert("Invalid credentials");
      setIsValidEmail(false);
    }
  };

  const signup = (values: FormModel) => {
    const user = api.signupByEmail(
      String(values.email),
      String(values.code?.join("")),
      passwordType
    );
    if (user?.user) {
      //Todo redirect to account page
      alert(JSON.stringify(user, null, 4));
    } else {
      alert("Invalid credentials");
      setIsValidEmail(false);
    }
  };

  return [
    { isValidEmail, passwordType },
    { validateEmail, login, signup },
    stateFormUpdate,
  ];
};
