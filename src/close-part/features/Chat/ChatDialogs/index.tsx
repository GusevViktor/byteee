import React, { useState } from "react";
import moment from "moment";
import styles from "./style.module.scss";
import { Avatar, Text, Icons, Input } from "@viktor666/byteee-kit";
import { changeTimeFormat } from "src/helpers/date";


type messageType = {
  message: string,
  date: string,
  nameMessage?: string,
}[];

export interface ChatI {
  messages: messageType[]
  name: string,
  id: string,
  icon: string,
  type: string,
  isOnline?: boolean,
  isVerified?: boolean,
  isWarning?: boolean,
  isRead?: boolean,
  isMute?: boolean,
}

interface ChatDialogsProps extends ChatI {
  countParticipiants: number,
  onBack: () => void,
}


const ChatDialogsItem = (props: ChatDialogsProps) => {
  const [valueInput, setValueInput] = useState("");

  const {
    Smile,
    Send,
    Check,
    ChevronLeft,
    UserCheck,
    MoreHorizontal,
  } = Icons;

  const {
    line,
    wrap,
    header,
    header_info,
    footer,
    dialogs,
    following,
    avtar_arrow,
    left_side,
    avatar,
    smile,
    cloud,
    cloud_wrap,
    cloud_wrap_violet,
    cloud_wrap_gray,
    cloud_violet,
    cloud_gray,
    cloud_avatar_violet,
    cloud_avatar_gray,
    triangle,
    triangle_violet,
    triangle_gray,
    input_wrap,
    cloud_check,
    cloud_bottom,
    cloud_avatar,
    name_message,
    name_message_time,
    cloud_wrap__is_person,
    cloud_wrap__is_person_violet,
    cloud_wrap__is_person_gray,
    header_title,
    check_and_text,
    check_and_text__is_group,
    send,
  } = styles;
  const {
    name,
    icon,
    messages,
    isOnline,
    onBack,
    type,
    countParticipiants,
  } = props;

  const onBackClick = () => onBack();

  const isGroup = type === "group";
  const isPerson = type === "person";
  const printCheckAndTime = (even: boolean, date: string) => (
    <div className={
      [
        check_and_text,
        isGroup && check_and_text__is_group
      ].join(" ")
    }>
      <Text
        size="s"
        color="grayscale400"
      >
        {changeTimeFormat(date)}
      </Text>
      {even && (
        <div className={cloud_check}>
          <Check color="violet500" />
        </div>
      )}
    </div>
  );
  return (
    <div className={wrap}>
      <header className={header}>
        <div className={left_side}>
          <div className={avtar_arrow}>
            <div onClick={onBackClick}>
              <ChevronLeft size="m" color="violet600" />
            </div>
            <div className={avatar}>
              <Avatar
                src={icon}
                size="m"
                status={isOnline && isPerson ? "online" : "offline"}
                alt={`Icon: ${name}`}
              />
            </div>
          </div>
          <div className={header_info}>
            <div className={header_title}>
              <Text size="m" color="grayscale1000">
                {name}
              </Text>
            </div>
            {isGroup ? (
              <Text size="xs" color="grayscale600">
                {`${countParticipiants} participiants`}
              </Text>
            ) : (
              <div className={following}>
                <UserCheck
                  size="s"
                  color="violet600"
                />
                <Text size="s" color="violet600">
                  Following
                </Text>
              </div>
            )}

          </div>
        </div>
        <MoreHorizontal size="m" color="violet600"/>
      </header>
      <div className={dialogs}>
        {messages.map((message, index) => (
          message.map((text, indexText) => {
            const even = index % 2 !== 0;
            const date = moment(text.date).format("MMMM DD");
            const cloudStyle = even ?
              cloud_wrap__is_person_violet : cloud_wrap__is_person_gray;
            return (
              <div key={`${text.message} ${text.date}`}>
                {(indexText === 0 && index === 1) && (
                  <div className={line}>
                    <Text size="xs" as="p" color="grayscale600">
                      {date}
                    </Text>
                  </div>
                )}
                <div className={[
                  cloud_wrap,
                  isPerson && cloud_wrap__is_person,
                  index % 2 !== 0 ? cloud_wrap_violet : cloud_wrap_gray,
                ].join(" ")}>
                  <div
                    className={
                      [
                        cloud,
                        even ? cloud_violet : cloud_gray,
                        isPerson ? cloudStyle : "",
                      ].join(" ")
                    }>
                    {text?.nameMessage && (
                      <div className={name_message}>
                        <Text size="s" color="violet600">
                          {text.nameMessage}
                        </Text>
                        <div className={name_message_time}>
                          {printCheckAndTime(even, text.date)}
                        </div>
                      </div>
                    )}
                    <div className={cloud_bottom}>
                      <Text
                        size="s"
                        color="grayscale1000"
                      >
                        {text.message}
                      </Text>
                      {!text?.nameMessage && printCheckAndTime(even, text.date)}
                    </div>
                    {indexText === 0 && (
                      <div className={[
                        triangle,
                        index % 2 !== 0 ? triangle_violet : triangle_gray,
                      ].join(" ")}/>
                    )}
                    {(indexText === 0 && isGroup) && (
                      <div className={[
                        cloud_avatar,
                        index % 2 !== 0 ? cloud_avatar_violet : cloud_avatar_gray,
                      ].join(" ")}>
                        <Avatar
                          status="offline"
                          size="xs"
                          src={icon}
                          alt="avatar"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })))}
      </div>
      <footer className={footer}>
        <div className={input_wrap}>
          <Input
            size="m"
            value={valueInput}
            placeholder="Type your message"
            onChange={(e) => setValueInput(e.currentTarget.value)}
          />
        </div>
        <div className={smile}>
          <Smile color="violet600" size="m"/>
        </div>
        {valueInput && (
          <div className={send}>
            <Send color="violet600" size="m"/>
          </div>
        )}
      </footer>
    </div>
  );
};
export default ChatDialogsItem;