import ModalTemplate from "../ModalTemplate";
import React from "react";
import style from "./style.module.scss";
import { Button, Text } from "@viktor666/byteee-kit";
import { useCallbackPrompt } from "src/hooks";
const { buttons, title, description, wrap } = style;

export interface Props {
  dirty: boolean
  setDirty: (dirty:boolean) => void;
}

const SaveChangesModal = ({ dirty, setDirty }:Props) => {
  const [showPrompt, confirmNavigation, cancelNavigation] =
    useCallbackPrompt(dirty);
  return (
    <ModalTemplate isOpen={showPrompt as boolean} className={wrap} onClose={() => {
      if (typeof cancelNavigation === "function"){
        cancelNavigation();
      }
    }}>
      <div className={title}>
        <Text size={[6, 6, 4]} bold>Save changes?</Text>
      </div>
      <div className={description}>
        <Text size={"m"}>Before leaving the page,
        please decide if you want to save the changes you made.</Text>
      </div>
      <div className={buttons}>
        <Button
          type="outline"
          htmlType="reset"
          size="l"
          onClick={() => {
            if (typeof confirmNavigation === "function"){
              confirmNavigation();
            }
            if (setDirty) {
              setDirty(false);
            }
          }} >
          Discard
        </Button>
        <Button
          type="solid"
          size="l"
          onClick={() => {
            if (typeof confirmNavigation === "function"){
              confirmNavigation();
            }
            if (setDirty) {
              setDirty(false);
            }
          }}>Save changes</Button>
      </div>
    </ModalTemplate>
  );
};
export default SaveChangesModal;