import React, { LegacyRef } from "react";
import { Avatar, Icons, Text } from "@viktor666/byteee-kit";
import style from "./style.module.scss";
import { useTabletType } from "src/hooks";

interface Props {
  title: string;
  isPastSession?: boolean;
  startTime: string;
  endTime: string;
  description: string;
  index: number;
  isSmallSessionCard?: boolean;
  speaker: string;
  img: string;
  open?: boolean;
  top: number;
  close?: () => void;
}

const {
  info_wrap,
  header,
  description_step,
  pastSession,
  info,
  description_arrow,
  header_group,
  hidden,
  speaker_info,
  smallCardPaddings,
  header_first_section,
  sessionTime
} = style;

const { ChevronUp } = Icons;

const detailedInfoCard = ({
  title,
  startTime,
  endTime,
  isSmallSessionCard,
  description,
  index,
  speaker,
  open,
  close,
  isPastSession,
  top,
  img
}: Props, ref: LegacyRef<HTMLDivElement>) => {
  const isTablet = useTabletType();

  const DescriptionAndSpeakerInfo = ():JSX.Element => (
    <div>
      <div className={info}>
        <Text
          size="m"
          bold
          color="grayscale900"
          as="h3">
          {title}
        </Text>
        <div className={sessionTime}>
          <Text size="s">
            {`${startTime}–${endTime}`}
          </Text>
        </div>
        <Text size="s">
          {description}
        </Text>
      </div>
      <div className={speaker_info}>
        <Avatar status="offline" size="xs" src={img} alt={img} />
        <Text size="s">
          {speaker}
        </Text>
      </div>
    </div>
  );

  return (
    <div
      className={
        `${open ? info_wrap : hidden}
       ${isSmallSessionCard && smallCardPaddings}`}
      style={{ top: top }}
      ref={ref}
    >
      <div className={header_group}>
        {isTablet &&
          <div className={header}>
            <div className={header_first_section}>
              <div className={`${description_step}
                 ${isPastSession && pastSession}`}>
                <Text size="s" color="white">
                  {index + 1}
                </Text>
              </div>
              <DescriptionAndSpeakerInfo/>
            </div>
            <div className={description_arrow} onClick={close}>
              <ChevronUp size="m" color="grayscale500" />
            </div>
          </div>
        }
        {!isTablet &&
          <>
            <Text size="s">
              {`${startTime}–${endTime}`}
            </Text>
            <div className={description_arrow} onClick={close}>
              <ChevronUp size="m" color="grayscale500" />
            </div>
          </>
        }
      </div>
      {!isTablet &&
          <DescriptionAndSpeakerInfo/>
      }
    </div>
  );
};
export const DetailedInfoCard = React.forwardRef(detailedInfoCard);