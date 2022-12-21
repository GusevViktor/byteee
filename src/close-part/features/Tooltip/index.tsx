import React, { useRef, useEffect, useState } from "react";
import { Icons, Text } from "@viktor666/byteee-kit";
import Popven from "./Popven";
import style from "./style.module.scss";
import { getStringNotBreakingSpace } from "src/helpers";

const { wrap, tooltip, tooltip__left, tooltip__right } = style;
const { AlertCircle } = Icons;

interface Props {
  children?: React.ReactNode | string[],
  size?: "s" | "m",
  className?: string,
  classNameTip?: string,
  isNotBold?: boolean,
}

const Tooltip = ({
  children,
  size = "m",
  className,
  classNameTip,
  isNotBold = false,
}: Props) => {
  const [location, setLocation] = useState<"left" | "right">();
  const isArrayChildren = Array.isArray(children);
  let newChildren;
  if(isArrayChildren && !isNotBold) {
    newChildren = children.map((str) => (
      <div key={str}>
        {str.split(" ").map((text) => {
          const isBold = text[0] === "'" && (
            text[text.length - 1] === "'" || text[text.length - 2] === "'"
          );
          const newText = isBold ? text.split("'").join("") : text;
          const newComponentText = isBold ? (
            <b key={`${newText}${str}`}>
              {newText}
            </b>
          ) : text;
          return (
            <React.Fragment key={`${newText}${str}`}>
              {newComponentText}
              {" "}
            </React.Fragment>
          );
        })}
      </div>
    ));
  }
  const ref = useRef<HTMLHeadingElement>(null);
  const widthOut = window.innerWidth;
  useEffect(() => {
    const offsetLeft = ref.current?.offsetLeft;
    if(offsetLeft) {
      if(offsetLeft < widthOut / 2) {
        setLocation("right");
      } else {
        setLocation("left");
      }
    }
  }, [widthOut]);


  const getChildren = () => (
    isArrayChildren ?
      getStringNotBreakingSpace(children, true) :
      children
  );

  return (
    <div
      className={`${wrap} ${className}`}
      ref={ref}
    >
      <AlertCircle color={"grayscale500"} size={size} />
      <div
        className={`
          ${tooltip}
          ${classNameTip}
          ${location === "left" && tooltip__left}
          ${location === "right" && tooltip__right}
        `}
      >
        <Popven
          placement={location === "left" ? "right" : "left"}
        >
          <Text as={"div"} size={"s"}>{newChildren || getChildren()}</Text>
        </Popven>
      </div>
    </div>
  );
};

export default Tooltip;