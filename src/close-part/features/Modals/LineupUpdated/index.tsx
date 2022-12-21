import React from "react";
import { ModalTemplate } from "../../Modals";
import { Text, Avatar, Button } from "@viktor666/byteee-kit";
import style from "./style.module.scss";
import { changeTimeFormat } from "src/helpers/date";

export type SessionType = {
  numberSession: string,
  name: string,
  fullName: string,
  startTime: Date,
  endTime: Date,
}

export type LineupItemType = {
  id: string,
  icon: string,
  name: string,
  session: SessionType
};

interface LineupUpdatedProps {
  onClose: () => void;
  onOk: () => void;
  isOpen: boolean;
  description: string;
  lineup: [LineupItemType, LineupItemType]
}

const LineupUpdated = (props: LineupUpdatedProps) => {
  const {
    description,
    item,
    item__last,
    buttons,
    button_ok,
    flex,
    info_speaker,
    session_and_time,
    name_style,
    modal,
    number_session,
  } = style;

  const {
    isOpen,
    onClose,
    lineup = [],
    onOk,
  } = props;


  return (
    <ModalTemplate
      onClose={onClose}
      isOpen={isOpen}
      className={modal}
      title="Lineup updated"
    >
      <p className={description}>
        <Text as="span" size="m">
          {`You have updated the speakers and the sessions.
          The new lineup looks as follows:`}
        </Text>
      </p>
      {lineup.map(({
        id,
        icon,
        name,
        session,
      }, index) => (
        <div key={id} className={[
          item,
          index === lineup.length - 1 ? item__last : ""
        ].join(" ")}>
          <div className={flex}>
            <Avatar
              status="offline"
              size="m"
              src={icon}
              alt={`Icon: ${name}`}
            />
            <div className={name_style}>
              <Text size="m">
                {name}
              </Text>
            </div>
          </div>
          <div className={info_speaker}>
            <div className={session_and_time}>
              <div className={number_session}>
                <Text size="s" color="grayscale500">
                  {session.numberSession}
                </Text>
              </div>
              <div className={flex}>
                <Text size="s" color="grayscale700">
                  {
                    `${
                      changeTimeFormat(session.startTime)
                    }-${
                      changeTimeFormat(session.endTime)
                    }`
                  }
                </Text>
              </div>
            </div>
            <Text size="m">
              {session.name}
            </Text>
          </div>
        </div>
      ))}
      <div className={buttons}>
        <div className={button_ok}>
          <Button
            onClick={onOk}
            theme="violet"
            size="l"
            type="solid"
          >
            OK
          </Button>
        </div>
        <Button
          onClick={onClose}
          theme="violet"
          size="m"
          type="outline"
        >
          Cancel
        </Button>
      </div>
    </ModalTemplate>
  );
};

export default LineupUpdated;
