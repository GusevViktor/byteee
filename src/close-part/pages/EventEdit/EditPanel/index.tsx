import React from "react";
import style from "./style.module.scss";
import EditPanelItem from "./EditPanelItem";
import SpeakerList from "src/close-part/features/SpeakerList";
import FormEventBasicSettings from "src/close-part/features/FormEventBasicSettings";
import ScheduleSessions from "src/close-part/features/ScheduleSessions";
import AdditionalSettings from "./AdditionalSettings";
import { Button } from "@viktor666/byteee-kit";

import {
  event,
  sessions as defaultSession,
  speakers as defaultSpeakers,
} from "../data";

export const timeToDate = (hour: number, minute: number) => (
  new Date(new Date().setHours(hour, minute))
);

const EditPanel = () => {
  const eventData = { ...event };
  const sessions = [...defaultSession];
  const speakers = [...defaultSpeakers];
  const { wrap, button_wrap, inner } = style;

  return (
    <div className={wrap}>
      <div className={inner}>
        <EditPanelItem icon="box" title="Basic settings" >
          <FormEventBasicSettings
            noTitle
            {...eventData}
          />
        </EditPanelItem>
        <EditPanelItem icon="user" title="Speakers" >
          <SpeakerList
            allSessions={sessions.map(({ name }, index) => ({
              label: `Session ${index + 1} ${name}`,
              value: name,
            }))}
            speakers={speakers.map(speaker => ({
              ...speaker,
              onChange: () => 1 + 1,
              onSubmit: () => 1 + 1,
              onDelete: () => 1 + 1,
              sessions
            }))}
          />
        </EditPanelItem>
        <EditPanelItem icon="clock" title="Sessions" >
          <ScheduleSessions sessions={sessions.map((session, index) => ({
            ...session,
            numberSession: `Session ${index + 1}`,
            speakers: defaultSpeakers,
            onSubmit: () => 1 + 1,
          }))}/>
        </EditPanelItem>
        <EditPanelItem
          icon="settings"
          title="Additional settings"
          separatorIsNotVisible
        >
          <AdditionalSettings />
        </EditPanelItem>
      </div>
      <div className={button_wrap}>
        <Button theme="violet">
          Save changes
        </Button>
      </div>
    </div>
  );
};

export default EditPanel;
