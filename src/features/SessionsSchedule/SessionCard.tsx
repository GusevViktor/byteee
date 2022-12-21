import React, { LegacyRef } from "react";
import style from "./style.module.scss";
import { Icons, Text } from "@viktor666/byteee-kit";

const { session_wrap,
  arrow,
  header,
  step,
  pastSession,
  smallCardPaddings,
  textOverflow,
  header_first_section } = style;
const { ChevronDown } = Icons;

interface SessionProps {
  title: string;
  index: number;
  height: number;
  top: number;
  isPastSession?: boolean;
  onClick?: () => void;
  className?: string;
}

const sessionCard = ({
  title,
  index,
  height,
  isPastSession,
  top,
  className,
  onClick
}: SessionProps, ref: LegacyRef<HTMLDivElement>): JSX.Element => (
  <div
    className={`${session_wrap} ${isPastSession && pastSession}
     ${height <= 85 && `${smallCardPaddings} ${textOverflow}`}
     ${className}`}
    style={{ height: height, top: top }}
    onClick={onClick}
    ref={ref}>
    <div className={header}>
      <div className={header_first_section}>
        <div className={`${step} ${isPastSession && pastSession}`}>
          <Text size="s" color={isPastSession ? "grayscale900" : "violet700"}>
            {index + 1}
          </Text>
        </div>
        <Text
          size="m"
          bold
          color={isPastSession ? "grayscale700" : "violet1000"}
          as="h3">
          {title}
        </Text>
      </div>
      <div className={`${arrow} ${isPastSession && pastSession}`}>
        <ChevronDown size="m" color={isPastSession ? "grayscale700" : "violet700"} />
      </div>
    </div>
  </div>
);
export const SessionCard = React.forwardRef(sessionCard);