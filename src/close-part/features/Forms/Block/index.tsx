import React from "react";
import style from "./style.module.scss";
interface BlockProps {
  children: React.ReactNode,
  className?: string,
}

const Block = ({
  children,
  className,
}: BlockProps) => {
  const {
    block,
  } = style;
  const classNames = className ? [
    className,
    block
  ].join(" ") : block;
  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

export default Block;