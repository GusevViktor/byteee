import React, { LegacyRef } from "react";
import style from "./style.module.scss";
import { Icons, Text } from "@viktor666/byteee-kit";

const { session_wrap, time, arrow, header, pastSession } = style;
const { ChevronDown } = Icons;

interface SessionProps {
  title: string;
  isPastSession?: boolean;
  startTime?: string;
  endTime?: string;
  onClick?: () => void;
  className?: string;
}

export const sessionCardMobile = ({
  title,
  isPastSession,
  onClick,
  className,
  startTime,
  endTime
}: SessionProps, ref: LegacyRef<HTMLDivElement>): JSX.Element => (
  <div
    className={`${session_wrap}
     ${isPastSession && pastSession}
      ${className}`}
    onClick={onClick}
    ref={ref}
  >
    <div className={header}>
      <div className={time}>
        <Text size="s" color={isPastSession ? "grayscale700" : "violet700"}>
          {`${startTime}-${endTime}`}
        </Text>
      </div>
      <div className={arrow}>
        <ChevronDown size="m" color={isPastSession ? "grayscale700" :"violet700"} />
      </div>
    </div>
    <Text
      size="m"
      bold
      color={isPastSession ? "grayscale700" :"violet1000"}
      as="h3"
    >
      {title}
    </Text>
  </div>
);
export const SessionCardMobile = React.forwardRef(sessionCardMobile);