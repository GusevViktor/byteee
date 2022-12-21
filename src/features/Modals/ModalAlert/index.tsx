import React, { useEffect } from "react";
import style from "./style.module.scss";
import { Button, Text } from "@viktor666/byteee-kit";
import { typeAlert } from "src/features/Layout";

interface ModalAlertProps {
  onClose: () => void,
  isOpen: boolean,
  completed?: typeAlert | undefined,
}

export const ModalAlert = (props: ModalAlertProps) => {
  const {
    isOpen,
    onClose,
    completed,
  } = props;

  const classname = completed && style[completed] ;

  useEffect(() => {
    setTimeout(onClose, 5000);
  }, [isOpen, completed]);
  return (
    <>
      {completed && isOpen ?
        <div className={[classname, style.wrap].join(" ")}>
          <div></div>
          {
            completed==="success" &&
            <Text size={["m", "m", 6, 6, 5, 5]} color="white" font="inter" bold>
              Message sent
            </Text>

          }
          {
            completed==="error" &&
            <Text size={["m", "m", 6, 6, 5, 5]} color="white" font="inter" bold>
              Something went wrong. Please try again
            </Text>
          }

          <div>
            <Button
              type="solid"
              theme="white"
              onClick={onClose}
              size="m"
            >
            OK
            </Button>

          </div>
        </div>
        :null}
    </>
  );
};
