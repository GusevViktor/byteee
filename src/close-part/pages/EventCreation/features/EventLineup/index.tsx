import { Text, Button } from "@viktor666/byteee-kit";
import React, { useState } from "react";
import { useModal } from "src/hooks";
import style from "./style.module.scss";
import Complex from "./Complex";
import { ModalDiscardLineupChanges, ModalMissingEventSpeaker } from "src/close-part/features/Modals";
import LineUpButton from "./LineUpButton";
import { StepperElementProps } from "../Stepper";
import orange_substract_topright from "src/assets/images/orange_substract_topright.svg";
import complex_button_icon from "src/assets/images/complex_button.svg";

const EventLineup = ({ changeStep }: StepperElementProps) => {
  const [value, setValue] = useState<string>("");
  const [lengthSpeakers, setLengthSpeaker] = useState<number>();
  const {
    isOpenModal,
    closeModal,
    openModal
  } = useModal();
  const {
    isOpenModal: isOpenModalSpeaker,
    closeModal: closeModalSpeaker,
    openModal: openModalSpeaker,
  } = useModal();

  const onClickSimple = (value: string) => {
    if(value === "2") {
      openModal();
    } else {
      setValue("1");
    }
  };
  const onClickContinue = () => {
    if(lengthSpeakers === 0) {
      openModalSpeaker();
    } else {
      changeStep(3);
    }
  };

  return (
    <>
      <div className={style.wrap}>
        <ModalDiscardLineupChanges
          isOpen={isOpenModal}
          onClose={closeModal}
          onSuccess={() => {
            setValue("1");
            closeModal();
          }}
        />
        <ModalMissingEventSpeaker
          isOpen={isOpenModalSpeaker}
          onClose={closeModalSpeaker}
          onSuccess={() => {
            changeStep(3);
            closeModalSpeaker();
          }}
        />
        <div className={style.text}>
          <Text size={6} bold as="h4">
            Event lineup
          </Text>
          <Text size ="m">
            Decide how elaborate your event structure will be.
          </Text>
        </div>
        <div className={style.buttons}>
          <div>
            <LineUpButton
              title="Simple"
              description="I am the only speaker and the event has no sessions"
              onClick={() => onClickSimple(value)}
              id="1"
              icon={orange_substract_topright}
              active={value ==="1" }
            />
          </div>
          <div>
            <LineUpButton
              title="Complex"
              description="Any amount of speakers with one or more sessions each"
              onClick={() => setValue("2")}
              id="2"
              icon={complex_button_icon}
              active={value === "2" }
            />
          </div>
        </div>
        <div>
          {value==="2" && (
            <Complex onSubscribe={(length) => setLengthSpeaker(length)}/>
          )}
        </div>
      </div>
      <Button
        className={style.buttonBack}
        type="flat"
        startIcon="ChevronLeft"
        onClick={() => changeStep(1)}>
            Basic settings
      </Button>
      <div className={style.submit}>
        <Button
          htmlType="submit"
          onClick={onClickContinue}
        >
            Continue
        </Button>
      </div>
    </>
  );
};
export default EventLineup;
