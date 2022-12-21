import React from "react";
import { Text } from "@viktor666/byteee-kit";
import style from "./style.module.scss";
interface LabelProps {
  children: string,
  isOptional?: boolean,
}

const Label = ({
  children,
  isOptional = false,
}: LabelProps) => {
  const {
    label,
  } = style;
  const getText = (text: string) => (
    <Text size={"m"} color={"grayscale900"}>
      {text}
    </Text>
  );
  return (
    <div className={label}>
      {getText(children)}
      {isOptional && (
        <>
          &nbsp;
          <Text size={"m"} color={"grayscale500"}>(optional)</Text>
        </>
      )}
    </div>
  );
};

export default Label;