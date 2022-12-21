import React, { useImperativeHandle, useRef, forwardRef, ForwardedRef } from "react";
import classes from "./pininput.module.scss";

export interface PinInput {
  className?: string;
  key?: number | string;
  digits: string[];
  error?:boolean;
  type?: string;
  onChange: (values:string[]|string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  ref?: (ref: ForwardedRef<unknown> | null) => void;
}

function updateArray(array: string[], index: number, newValue: string) {
  const copy: string[] = [...array];
  copy[index] = newValue;
  return copy;
}

const PinInput = ({ digits, onChange, error, type }:
PinInput, ref: ForwardedRef<unknown>) => {
  const inputRefs = useRef(new Array(digits.length));

  const handleChange = (index: number, newValue: string) => {
    const oldDigit = digits[index];
    const newDigit = newValue.trim().replace(oldDigit, "");

    if (newDigit < "0" || newDigit > "9") {
      return;
    }

    onChange(updateArray(digits, index, newDigit));

    const inputs = inputRefs.current;
    if (index < inputs.length - 1) {
      inputs[index + 1].focus();
    } else {
      inputs[index].blur();
    }
  };

  const handleKeyDown = (index: number, keyPressed: string) => {
    if (keyPressed !== "Backspace") {
      return;
    }
    if (digits[index]) {
      onChange(updateArray(digits, index, ""));
    } else if (index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRefs.current[0].focus();
    },
  }));

  return (
    <div className={classes.container}>
      {digits.map((digit: string, index: number) => (
        <input
          key={index}
          value={digit}
          className={`${classes.digit} ${error && classes.error}`}
          type={type}
          onChange={(event) => handleChange(index, event.target.value)}
          onKeyDown={(event) => handleKeyDown(index, event.nativeEvent.key)}
          ref={(ref) => {
            inputRefs.current[index] = ref;
          }}
        />
      ))}
    </div>
  );
};

export default forwardRef(PinInput);
