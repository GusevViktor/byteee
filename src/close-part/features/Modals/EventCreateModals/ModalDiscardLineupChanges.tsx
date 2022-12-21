import { Button } from "@viktor666/byteee-kit";
import React from "react";
import ModalTemplate from "../../Modals/ModalTemplate";
import style from "./style.module.scss";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}
const { modalWrap } = style;

const ModalDiscardLineupChanges = ({ isOpen, onClose, onSuccess }: ModalProps) => (
  <ModalTemplate
    isOpen={isOpen}
    onClose={onClose}
    className={modalWrap}
    title="Discard event lineup"
    description="If you continue with a Simple event lineup,
     we'll discard the created sessions and send the invited speakers
     a cancellation email."
    buttons={
      <>
        <Button
          size="m"
          type="solid"
          onClick={onSuccess}
        >
          Discard lineup
        </Button>
        <Button
          size="m"
          type="outline"
          onClick={onClose}
        >
          Cancel
        </Button>
      </>
    }>

  </ModalTemplate>
);
export default ModalDiscardLineupChanges;