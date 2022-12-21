import React, { useState } from "react";
import style from "./style.module.scss";
import { useModal } from "src/hooks";
import FormSession, { FormSessionValues } from "../../FormSession";
import { RemoveSpeakerModal } from "../../Modals/EventCreateModals";
import { Avatar, Text, Icons, Status, Select, Button } from "@viktor666/byteee-kit";

export type optionType = {
  label: string,
  value: string,
}
interface SpeakerItemProps {
  name: string,
  id: string,
  sessions: optionType[],
  allSessions: optionType[],
  speakers: optionType[],
  status: string,
  icon: string,
  isMe?: boolean,
  separatorIsNotVisible: boolean,
  onClickX: (id: string) => void,
  onSubmit: (values: FormSessionValues) => void,
  onChangeSelect: (session: optionType, option: optionType) => void,
}

const {
  X,
} = Icons;

const SpeakerItem = ({
  name,
  id,
  sessions,
  speakers,
  isMe,
  icon,
  allSessions,
  status,
  onClickX,
  onSubmit,
  onChangeSelect,
  separatorIsNotVisible
}: SpeakerItemProps) => {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const { isOpenModal, closeModal, openModal } = useModal();
  const {
    wrap,
    name_style,
    header,
    select,
    button,
    button_x,
    text,
    name_style_d,
    flex,
    selects_and_button,
    selects_and_button_ds,
    wrap_form,
    status_buttons,
    status_style,
    separator
  } = style;
  const getName = (isMobile: boolean) => (
    <div className={isMobile ? name_style : name_style_d}>
      <Avatar
        size={"s"}
        status={"offline"}
        alt={"avatar"}
        src={icon}
      />
      <div className={text}>
        <Text
          as="span"
          size="m"
          color="grayscale900"
        >
          {name}
        </Text>
      </div>
    </div>
  );

  const getIcon = (isOpenForm: boolean): {startIcon: "Plus"} | undefined => (
    !isOpenForm ? {
      ...(!isOpenForm && { startIcon: "Plus" })
    } : undefined
  );

  const getSelectsName = (isMobile: boolean) => (
    <div className={isMobile ? selects_and_button : selects_and_button_ds}>
      {isMe && ""}
      {sessions.map(session => (
        <div className={select} key={session.value}>
          <Select
            size="s"
            options={allSessions}
            option={session}
            onClick={(option) => onChangeSelect(session, option)}
          />
        </div>
      ))}
      <div className={button}>
        <Button
          size="s"
          theme="violet"
          type="outline"
          {...getIcon(isOpenForm)}
          onClick={() => setIsOpenForm(!isOpenForm)}
        >
          {isOpenForm ? "Cancel" : "Create session"}
        </Button>
      </div>
    </div>
  );

  return (
    <li className={wrap}>
      <RemoveSpeakerModal
        isOpen={isOpenModal}
        onClose={closeModal}
        onSuccess={() => onClickX(id)}
        name={name}
        icon={icon}
      />
      <div className={header}>
        <div className={status_buttons}>
          {status && (
            <div className={status_style}>
              <Status
                color="grayscale"
                text="Pending"
                size="xs"
              />
            </div>
          )}
          {getSelectsName(false)}
        </div>
        <div className={flex}>
          <button className={button_x} onClick={openModal}>
            <X color="grayscale500" />
          </button>
          {getName(false)}
        </div>
      </div>
      {getName(true)}
      {getSelectsName(true)}
      {isOpenForm && (
        <div className={wrap_form}>
          <FormSession
            numberSession={`Session ${allSessions.length + 1}`}
            onSubmit={(values) => {
              onSubmit(values);
              setIsOpenForm(false);
            }}
            speakers={speakers}
            speaker={{
              label: name,
              value: name,
            }}
          />
        </div>
      )}
      {!separatorIsNotVisible && (
        <div className={separator} />
      )}
    </li>
  );
};

export default SpeakerItem;