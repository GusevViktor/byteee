import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import ScheduleSessions from "src/close-part/features/ScheduleSessions";
import FormSession from "src/close-part/features/FormSession";
import Tooltip from "src/close-part/features/Tooltip";
import SpeakerList from "src/close-part/features/SpeakerList";
import { Text, Button, Select, Toggle } from "@viktor666/byteee-kit";
import { LineupUpdatedModal } from "src/close-part/features/Modals";
import { useModal } from "src/hooks";
import { SessionI } from "src/interface";
import {
  speakers as defaultSpeakers, sessions as defaultSessions
} from "src/close-part/pages/EventEdit/data";

interface ComplexI {
  onSubscribe: (speakersLength: number) => void;
}

const Complex = ({ onSubscribe }: ComplexI) => {
  const [editSession, setEditSession] = useState<any>();
  const [sessions, setSessions] = useState<SessionI[]>(defaultSessions);

  const { isOpenModal, closeModal, openModal } = useModal();

  const speakers = defaultSpeakers.map(speaker => ({
    ...speaker,
    sessions: defaultSessions.filter(
      session => session.speakerId === speaker.id
    ),
    onChange: () => openModal(),
    onSubmit: () => 1 + 1,
    onDelete: () => 1 + 1,
  }));

  useEffect(() => {
    onSubscribe(speakers.length);
  }, [speakers]);

  const {
    info,
    description,
    select,
    buttons,
    button_send,
    schedule,
    toggle_wrap,
    info_title,
    tooltip,
    schedule_text,
  } = style;

  return (
    <div>
      <LineupUpdatedModal
        onClose={closeModal}
        onOk={closeModal}
        isOpen={isOpenModal}
        description={description}
        lineup={[{
          id: defaultSpeakers[0].id,
          icon: defaultSpeakers[0].icon,
          name: defaultSpeakers[0].name,
          session: {
            ...sessions[0],
            numberSession: "Session 1",
            fullName: "",
          },
        }, {
          id: defaultSpeakers[1].id,
          icon: defaultSpeakers[1].icon,
          name: defaultSpeakers[1].name,
          session: {
            ...sessions[1],
            numberSession: "Session 2",
            fullName: "",
          },
        }]}
      />
      <div className={info}>
        <div className={info_title}>
          <Text
            size="m"
            bold
            color="grayscale900"
          >
          Speakers and sessions
          </Text>
          <Tooltip className={tooltip}>
            {[
              "Each invited speaker",
              "should have at least one",
              "assigned session to be",
              "shown on the event landing",
              "page",
            ]}
          </Tooltip>
        </div>
        <div className={description}>
          <Text
            size="m"
            color="grayscale900"
          >
            {`Invite some third-party experts to become speakers at your
            event, then create a session (or a few) for each speaker.
            You can modify allthe details any time before the event starts.`}
          </Text>
        </div>
        <div className={buttons}>
          <div className={select}>
            <Select
              size="s"
              option={{
                value: "",
                label: "",
              }}
              options={[]}
              onClick={() => 1+1}
            />
          </div>
          <div className={button_send}>
            <Button size="s">Send invitation</Button>
          </div>
        </div>
        <SpeakerList
          allSessions={sessions.map(({ name }, index) => ({
            label: `Session ${index + 1} ${name}`,
            value: name,
          }))}
          speakers={speakers}
        />
      </div>
      <div className={toggle_wrap}>
        <Toggle
          color="violet"
        />
        <Text
          as="p"
          size="m"
        >
          Show speakers with Pending status and their sessions on
          the event landing page and let them perform during the event broadcast
        </Text>
      </div>
      {editSession ? (
        <FormSession
          editMode={true}
          onDelete={() => {
            setSessions(sessions.filter(({ name }) => editSession.name !== name));
            setEditSession(undefined);
          }}
          numberSession={editSession.numberSession}
          name={editSession.name}
          description={editSession.description}
          startTime={editSession.startTime}
          endTime={editSession.endTime}
          speaker={{
            value: speakers.find(({ id }) => (
              `${id}` === editSession.speaker
            ))?.name || "",
            label: speakers.find(({ id }) => (
              `${id}` === editSession.speaker
            ))?.name || "",
          }}
          onSubmit={() => setEditSession(undefined)}
          onClickArrow={() => setEditSession(undefined)}
          speakers={speakers.map(({ name }) => ({
            value: name,
            label: name,
          }))}
        />
      ) : (
        <div className={schedule}>
          <div className={schedule_text}>
            <Text
              size="m"
              bold
              as="h6"
            >
            Schedule
            </Text>
          </div>
          <ScheduleSessions
            sessions={sessions.map((session, index) => ({
              ...session,
              numberSession: `Session ${index + 1}`,
              onSubmit: () => 1 + 1,
              speakers,
              speakerId: session.speakerId,
            }))} />
        </div>
      )}
    </div>
  );
};

export default Complex;