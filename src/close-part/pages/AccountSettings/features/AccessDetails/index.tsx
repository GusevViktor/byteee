import style from "./style.module.scss";
import React, { useState } from "react";
import { Input, Text } from "@viktor666/byteee-kit";
import {
  DeleteAccountModal,
  ChangeEmailModal,
  ChangePasswordModal,
  DeletePasswordModal,
  SetPasswordModal
} from "src/close-part/features/Modals";


const { wrap,
  title,
  content,
  email,
  section,
  deletion,
  input,
  form,
  hr_bottom,
  fullwidth,
  changePassword } = style;

const validPhrase = "If you love someone, let them go";


const AccessDetails = () => {
  const [hasPassword, setHasPassword] = useState<boolean>(false);
  const [phrase, setPhrase] = useState<string>("");
  const [isValidPhrase, setIsValidPhrase] = useState<boolean>();

  const errorMessage = () => {
    if (!isValidPhrase && isValidPhrase !== undefined ) {
      return "Please check that you entered the phrase correctly";
    } else if (phrase === "" && isValidPhrase !== undefined ) {
      return "Please enter the phrase";
    } else return "";
  };
  return ( <>
    <div className={wrap}>
      <div className={title}>
        <Text size={[6, 6, 5, 5, 4]} font="inter" bold>Access details </Text>
      </div>
      <div className={content}>
        <div className={form}>
          <div className={section}>
            <Text size={"m"}>Email</Text>
            <div className={email}>
              <Text size={"s"} color={"grayscale600"}>Darlene@microsoft.com</Text>
              <ChangeEmailModal />
            </div>
          </div>
          <div className={section}>
            <Text size={"m"}>Password</Text>
            <Text size={"s"} color={"grayscale600"}>
                  You can set a permanent password
                  if you {"don't"} want to use temporary login codes.
            </Text>
          </div>
          <div className={fullwidth}>
            {!hasPassword &&
              <SetPasswordModal onClose={() => setHasPassword(true)}/>}
            <div className={changePassword}>
              { hasPassword &&
              <ChangePasswordModal />}
              { hasPassword &&
              <DeletePasswordModal
                onClose={() => setHasPassword(false)}/>}
            </div>
          </div>
          <hr className={`${hr_bottom} solid`}/>
          <div className={deletion}>
            <Text size={"m"} color={"red700"} bold>Delete account</Text>
            <Text size={"s"} color={"grayscale900"}>
                  Sorry to hear you want to delete your account.
                  Enter a phrase “If you love someone, let them go”
                  to confirm that you are doing it on purpose.
            </Text>
          </div>
          <div className={input}>
            <Input
              name="phrase"
              size="m"
              value={phrase}
              placeholder={"Type the phrase here"}
              onChange={(e) => {
                setPhrase(e.currentTarget.value);
                if (e.currentTarget.value === validPhrase){
                  setIsValidPhrase(true);
                }
              }}
              error={errorMessage()}/>
          </div>
          <div className={fullwidth}>
            <DeleteAccountModal onOpen={(openModal: () =>void) => {
              if (phrase === validPhrase) {
                setIsValidPhrase(true);
                openModal();
              } else {
                setIsValidPhrase(false);
              }
            }}/>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default AccessDetails;