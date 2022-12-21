import React, { useState } from "react";
import style from "./style.module.scss";
import { Text, Icons } from "@viktor666/byteee-kit";
import { SpeakerI, SessionI } from "src/interface";
import FormSession from "src/close-part/features/FormSession";
import { changeTimeFormat } from "src/helpers/date";

export interface ScheduleItemI extends SessionI {
  numberSession: string,
  speakers: SpeakerI[],
  onSubmit: () => void;
}

const ScheduleItem = (props: ScheduleItemI) => {
  const [editMode, setEditMode] = useState(false);
  const {
    ChevronDown,
  } = Icons;
  const {
    wrap,
    left_side,
    arrow,
    time,
    info,
    number_session,
    name_style,
    wrap_form,
  } = style;

  const {
    name,
    numberSession,
    startTime,
    endTime,
    onSubmit,
    speakerId,
    speakers,
    description
  } = props;
  const speaker = speakers.find(({ id }) => id === speakerId) || {
    name: "",
  };
  const closeForm = () => setEditMode(false);

  const onSubmitForm = () => {
    onSubmit();
    closeForm();
  };
  return (
    <>
      {editMode && (
        <div className={wrap_form}>
          <FormSession
            onClickArrow={closeForm}
            onDelete={closeForm}
            numberSession={numberSession}
            editMode
            onSubmit={onSubmitForm}
            name={name}
            description={description}
            startTime={startTime}
            endTime={endTime}
            speaker={{
              label: speaker.name,
              value: speaker.name,
            }}
            speakers={speakers.map(({ name }) => ({
              label: name,
              value: name,
            }))}
          />
        </div>
      )}
      {!editMode && (
        <div className={wrap} onClick={() => setEditMode(true)}>
          <div className={left_side}>
            <div className={time}>
              <Text
                color="grayscale500"
                as="span"
                size={["xs", "s", "s"]}
              >
                {`${changeTimeFormat(startTime)}–`}
              </Text>
              <Text
                color="grayscale500"
                as="span"
                size={["xs", "s", "s"]}
              >
                {changeTimeFormat(endTime)}
              </Text>
            </div>
            <div className={info}>
              <div className={number_session}>
                <Text size="s" color="grayscale500">
                  {numberSession}
                </Text>
              </div>
              <div className={name_style}>
                <Text
                  size={"m"}
                  color={"grayscale900"}
                >
                  {name}
                </Text>
              </div>
            </div>
          </div>
          <div className={arrow}>
            <ChevronDown size="m" color="violet600"/>
          </div>
        </div>
      )}
    </>
  );
};

export default ScheduleItem;
