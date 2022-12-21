import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import SpeakerItem, { optionType } from "./SpeakerItem";
import Tooltip from "src/close-part/features/Tooltip";
import { FormSessionValues } from "../FormSession";
import { Text } from "@viktor666/byteee-kit";
import { SpeakerI } from "src/interface";

export interface SpeakerFullI extends SpeakerI {
  onChange: (
    speaker: SpeakerI,
    session: optionType,
    option: optionType,
    speakers: SpeakerI[]
  ) => void;
  onSubmit: (values: FormSessionValues) => void;
  onDelete: (id: string, speakers: SpeakerFullI[]) => void;
}

interface SpeakerListProps {
  speakers: SpeakerFullI[];
  allSessions: optionType[];
}

const SpeakerList = ({
  speakers: initialSpeakers,
  allSessions,
}: SpeakerListProps) => {
  const [speakers, setSpeakers] = useState(initialSpeakers);
  useEffect(() => {
    setSpeakers(initialSpeakers);
  }, [initialSpeakers]);
  const {
    wrap,
    header,
    flex,
    tip,
    header_session,
  } = style;

  return (
    <div>
      <header className={header}>
        <div className={flex}>
          <Text
            size="m"
            color="grayscale600"
          >
            Speaker
          </Text>
          <Tooltip className={tip}>
            {[
              "Each invited speaker",
              "should have at least one",
              "assigned session to be",
              "shown on the event landing",
              "page."
            ]}
          </Tooltip>
        </div>
        <div className={flex}>
          <div className={flex}>
            <Text
              size="m"
              color="grayscale600"
            >
            Status
            </Text>
            <Tooltip className={tip}>
              {[
                "'Pending' means that the",
                "speaker hasn't yet replied",
                "to your invitation.",
                "When they do, the status",
                "will change to 'Accepted' or 'Declined'.",
              ]}
            </Tooltip>
          </div>
          <div className={[flex, header_session].join(" ")}>
            <Text
              size="m"
              color="grayscale600"
            >
            Session
            </Text>
            <Tooltip className={tip}>
              {[
                "You can create more than",
                "one session for one",
                "speaker."
              ]}
            </Tooltip>
          </div>
        </div>
      </header>
      <ul className={wrap}>
        {speakers.map((speaker, index) => {
          const { sessions = [] } = speaker;
          return (
            <SpeakerItem
              separatorIsNotVisible={index === speakers.length - 1}
              key={speaker.id}
              name={speaker.name}
              id={`${speaker.id}`}
              sessions={sessions.map(({ name }, index) => ({
                label: `Session ${index} ${name}`,
                value: name,
              }))}
              allSessions={allSessions}
              status={"pending"}
              icon={speaker.icon}
              isMe={false}
              onClickX={id => speaker.onDelete(id, speakers)}
              speakers={speakers.map(({ name }) => ({
                value: name,
                label: name,
              }))}
              onSubmit={speaker.onSubmit}
              onChangeSelect={(firstSession, session) => speaker.onChange(
                speaker, firstSession, session, speakers
              )}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default SpeakerList;