import React from "react";
import style from "./style.module.scss";
import { Text } from "@viktor666/byteee-kit";

const { wrap, circleWrap, selectedStep, completedStep } = style;
interface StepProps {
  icon: React.ReactElement,
  label: string,
  selected?: boolean,
  completed?: boolean,
  onClick: (step: number) => void,
  index: number,
}

export const Step = ({
  icon,
  selected,
  completed,
  onClick,
  index,
  label
}:StepProps) => {

  const textColor = () => {
    if (completed) {
      return "grayscale900";
    } else if (selected) {
      return "mint500";
    }
    return "grayscale500";
  };

  return (
    <div
      className={wrap}
      onClick={() => onClick(index + 1)}
    >
      <div
        className={`${circleWrap} ${selected ? selectedStep : "" }
      ${completed ? completedStep : "" }`}>
        {icon}
      </div>
      <Text size="m" font="inter" color={textColor()}>
        {label}
      </Text>
    </div>
  );
};