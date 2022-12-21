import React, { useState } from "react";
import style from "./style.module.scss";
import { Button } from "@viktor666/byteee-kit";
import FormEventBasicSettings from "src/close-part/features/FormEventBasicSettings";
import { StepperElementProps } from "../Stepper";

const BasicSettings = ({ changeStep }: StepperElementProps) => {
  const [isError, setIsError] = useState(true);
  return (
    <div>
      <div className={style.wrap}>
        <FormEventBasicSettings onSubscribe={(values) => {
          setIsError(
            !(Boolean(values.name) &&
              Boolean(values.date) &&
              Boolean(values.startTime) &&
              Boolean(values.endTime) &&
              Boolean(values.registrationType) &&
              Boolean(values.attendeeLimit))
          );
        } } />
      </div>
      <div className={style.button}>
        <Button
          onClick={() => changeStep(2)}
          disabled={isError}
        >
            Continue
        </Button>
      </div>
    </div>
  );
};

export default BasicSettings;
