import { useNavigate } from "react-router";
import { changeTimeFormat } from "src/helpers/date";
import { Text } from "@viktor666/byteee-kit";
import React from "react";
import { Session } from "src/api/api";
import style from "./style.module.scss";

interface Props {
  sessions: Session[];
}

const {
  session_info,
  session_name
} = style;
export const SessionsInvitationList = ({ sessions }: Props) => (<React.Fragment>
  {sessions.map((
    session,
    index
  ) => {
    const navigate = useNavigate();
    const startSessionTime = changeTimeFormat(new Date(session.startTime));
    const endSessionTime = changeTimeFormat(new Date(session.endTime));
    return (
      <div key={`speaker-session-${index}`} className={session_info}>
        <Text size="s" color="grayscale700" as="h5">
          {`Session ${index + 1}`}
        </Text>
        <div className={session_name}>
          <Text size="xs">
            {`${startSessionTime}–${endSessionTime}`}
          </Text>
          <div onClick={() => navigate(`?session=${session.id}`)}>
            <Text size="m" color="violet600">
              {session.title}
            </Text>
          </div>
        </div>
      </div>
    );
  })}
</React.Fragment>);