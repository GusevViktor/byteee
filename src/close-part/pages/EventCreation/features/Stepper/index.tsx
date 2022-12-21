import React from "react";
import { Step } from "./Step";
import style from "./style.module.scss";

export interface StepperElementProps {
  changeStep: (step:number) => void
}

interface StepperProps {
  stepsArray: StepsArrayProps[],
  setStep: (step: number) => void;
}
interface StepsArrayProps{
  label:string,
  icon: React.ReactElement,
  Component: React.FunctionComponent<StepperElementProps>
}
const { line, stepper, mintLine, preview } = style;

const createStepper = ({ stepsArray, setStep }:StepperProps):
[(() => JSX.Element), (() => JSX.Element)] => {
  const [activeStep, setActiveStep] = React.useState(1);
  const { Component } = stepsArray[activeStep - 1];

  const onChangeStep = (step: number) => {
    if (step >= activeStep + 2) {
      return;
    }
    setActiveStep(step);
    setStep(step);
  };

  const StepperHeader = () => (
    <div className={`${stepper} ${activeStep === 3 && preview}`}>
      {stepsArray.map((item, index) => <React.Fragment key={index}>
        <Step
          icon={item.icon}
          label={item.label}
          index={index}
          selected={index + 1 <= activeStep}
          completed={index < activeStep - 1}
          onClick={onChangeStep}
        />
        <div
          className={`${line} ${index + 1 < activeStep? mintLine : ""}`}/>
      </React.Fragment>)}
    </div>
  );
  const StepperComponent = () => (
    <Component changeStep={onChangeStep}/>
  );
  return [StepperHeader, StepperComponent];
};
export default createStepper;